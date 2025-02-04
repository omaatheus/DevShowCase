"use client";

import Button from "@/app/components/landing-page/ui/button";
import { useStripe } from "@/app/hooks/useStripe";
import { useParams } from "next/navigation";

export default function PlanButtons() {
  const { profileId } = useParams();
  const { createStripeCheckout } = useStripe();

  return (
    <div className="flex gap-4 ">
              <div className="flex flex-col md:flex-row items-center gap-9">
                <div className="w-full max-w-[304px] p-8 flex flex-col gap-7 rounded-2xl border border-[#1E1E1E]">
                  <div className="flex flex-col">
                    <span className="text-black font-bold text-2xl">Mensal</span>
                    <span className="text-content-body">Apenas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-black font-bold text-[48px]">R$9,90</span>
                    <span className="text-content-headline text-2xl">/mês</span>
                  </div>
                  <Button onClick={() =>
          createStripeCheckout({
            metadata: { profileId },
            isSubscription: true,
          })
        } variant="primary">Assinar</Button>
                </div>
                <div className="flex flex-col w-full max-h-[304px] max-w-[304px]">
                  <div className="flex justify-center h-[200px] items-center rounded-t-2xl p-2 bg-[linear-gradient(90deg,#5000b9_0%,#7e038a_100%)]">
                    <span className="uppercase text-white font-bold">Recomendado</span>
                  </div>
                  <div className="p-[1.6px] bg-[linear-gradient(90deg,#5000b9_0%,#7e038a_100%)] rounded-b-2xl">
                    <div className="w-full max-h-[304px] bg-background-secondary p-8 flex flex-col gap-7 rounded-b-2xl">
                      <div className="flex flex-col">
                        <span className="text-black font-bold text-2xl">Vitalício</span>
                        <span className="text-content-body">Economize com</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-black font-bold text-[48px]">
                          R$59,90
                        </span>
                      </div>
                      <Button onClick={() =>
          createStripeCheckout({
            metadata: { profileId },
            isSubscription: false,
          })
        } variant="primary">Assinar</Button>
                    </div>
                  </div>
                </div>
              </div>

    </div>
    
  );
}