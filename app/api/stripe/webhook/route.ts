import { db } from "@/app/lib/firebase";
import { resend } from "@/app/lib/resend";
import stripe from "@/app/lib/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  try {
    console.log("Recebendo webhook Stripe");
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");
    const secret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!signature || !secret) {
      throw new Error("Stripe webhook não está setado");
    }

    const event = stripe.webhooks.constructEvent(body, signature, secret);
    console.log("Evento recebido:", event.type);

    switch (event.type) {
      case "checkout.session.completed":
        console.log("Evento checkout.session.completed recebido");
        
        if (event.data.object.payment_status === "paid") {
          console.log("Pagamento confirmado");
          const userId = event.data.object.client_reference_id;
          
          if (userId) {
            console.log(`Atualizando usuário ${userId} no Firebase`);
            await db.collection("users").doc(userId).update({
              isSubscribed: true,
            });
            console.log("Usuário atualizado com sucesso");
          } else {
            console.warn("userId não encontrado no evento");
          }
        }

        if (
          event.data.object.payment_status === "unpaid" &&
          event.data.object.payment_intent
        ) {
          console.log("Pagamento pendente (boleto?)");
          const paymentIntent = await stripe.paymentIntents.retrieve(
            event.data.object.payment_intent.toString()
          );
          const hostedVoucherUrl =
            paymentIntent.next_action?.boleto_display_details?.hosted_voucher_url;

          if (hostedVoucherUrl) {
            const userEmail = event.data.object.customer_details?.email;
            if (userEmail) {
              resend.emails.send({
                from: "onboarding@resend.dev",
                to: userEmail,
                subject: "Seu boleto para pagamento",
                text: `Aqui está o seu boleto: ${hostedVoucherUrl}`,
              });
            }
          }
        }
        break;

      case "checkout.session.async_payment_succeeded":
        console.log("Evento checkout.session.async_payment_succeeded recebido");
        
        if (event.data.object.payment_status === "paid") {
          const userId = event.data.object.client_reference_id;
          if (userId) {
            console.log(`Atualizando usuário ${userId} no Firebase (pagamento async)`);
            await db.collection("users").doc(userId).update({
              isSubscribed: true,
            });
            console.log("Usuário atualizado com sucesso");
          } else {
            console.warn("userId não encontrado no evento async");
          }
        }
        break;

      case "customer.subscription.deleted":
        console.log("Evento customer.subscription.deleted recebido");
        const subscription = event.data.object;
        const customerId = subscription.customer as string;

        if (customerId) {
          console.log(`Buscando customer ${customerId} no Stripe`);
          const customer = (await stripe.customers.retrieve(customerId)) as Stripe.Customer;

          if (customer && customer.metadata.userId) {
            const userId = customer.metadata.userId;
            console.log(`Cancelando assinatura do usuário ${userId}`);
            await db.collection("users").doc(userId).update({
              isSubscribed: false,
            });
            console.log("Usuário atualizado com sucesso");
          } else {
            console.warn("userId não encontrado nos metadados do customer");
          }
        }
        break;

      default:
        console.log(`Evento ${event.type} não tratado`);
    }

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error("Erro no webhook Stripe:", error);
    return new NextResponse(null, { status: 500 });
  }
}