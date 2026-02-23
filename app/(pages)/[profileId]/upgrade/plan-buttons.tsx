"use client";

import Button from "@/app/components/landing-page/ui/button";
import { useStripe } from "@/app/hooks/useStripe";
import { useParams } from "next/navigation";

export default function PlanButtons() {
  const { profileId } = useParams();
  const { createStripeCheckout } = useStripe();

  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-9 w-full">
      
      {/* Plano Mensal */}
      <div className="w-full max-w-[304px] p-8 flex flex-col justify-between gap-7 rounded-2xl border border-gray-200 bg-white">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col text-left">
            <span className="text-black font-bold text-2xl">Mensal</span>
            <span className="text-content-body">Apenas</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-black font-bold text-[48px]">R$6,90</span>
            <span className="text-content-headline text-xl">/mês</span>
          </div>
        </div>
        
        <Button 
          onClick={() =>
            createStripeCheckout({
              metadata: { profileId },
              isSubscription: true,
            })
          } 
          variant="primary"
          className="w-full"
        >
          Assinar
        </Button>
      </div>

      {/* Plano Vitalício */}
      <div className="flex flex-col w-full max-w-[304px]">
        <div className="flex justify-center items-center rounded-t-2xl py-2 bg-[linear-gradient(90deg,#5000b9_0%,#7e038a_100%)]">
          <span className="uppercase text-white font-bold text-sm tracking-wider">Recomendado</span>
        </div>
        <div className="p-[2px] bg-[linear-gradient(90deg,#5000b9_0%,#7e038a_100%)] rounded-b-2xl flex-1 flex flex-col">
          <div className="w-full h-full bg-background-secondary p-8 flex flex-col justify-between gap-7 rounded-b-[14px]">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col text-left">
                <span className="text-black font-bold text-2xl">Vitalício</span>
                <span className="text-content-body">Pagamento único</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-black font-bold text-[48px]">R$49,90</span>
              </div>
            </div>
            
            <Button 
              onClick={() =>
                createStripeCheckout({
                  metadata: { profileId },
                  isSubscription: false,
                })
              } 
              variant="primary"
              className="w-full"
            >
              Assinar
            </Button>
          </div>
        </div>
      </div>
      
    </div>
  );
}