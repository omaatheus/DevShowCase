import Button from "./ui/button";
import { TRIAL_DAYS } from "@/app/lib/config";

export default function Pricing() {
  return (
    <div className="my-[150px] flex flex-col items-center gap-14 px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <h3 className="text-4xl font-bold text-black mt-100">
          Um valor acessível para todos
        </h3>
        <p className="text-content-body text-xl">
          Junte-se à comunidade de criadores profissionais que já estão elevando
          sua presença online. Teste gratuitamente por{" "}
          <strong className="text-[#5000b9]">{TRIAL_DAYS} dias</strong>, sem
          compromisso!
        </p>
      </div>
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
          
        </div>
        <div className="flex flex-col w-full max-w-[304px]">
          <div className="flex justify-center items-center rounded-t-2xl p-2 bg-[linear-gradient(90deg,#5000b9_0%,#7e038a_100%)]">
            <span className="uppercase text-white font-bold">Recomendado</span>
          </div>
          <div className="p-[1.6px] bg-[linear-gradient(90deg,#5000b9_0%,#7e038a_100%)] rounded-b-2xl">
            <div className="w-full bg-background-secondary p-8 flex flex-col gap-7 rounded-b-2xl">
              <div className="flex flex-col">
                <span className="text-black font-bold text-2xl">Vitalício</span>
                <span className="text-content-body">Economize com</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-black font-bold text-[48px]">
                  R$59,90
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
