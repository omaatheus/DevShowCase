import Header from "@/app/components/landing-page/header";
import Button from "@/app/components/landing-page/ui/button";
import PlanButtons from "./plan-buttons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkShowCase - Upgrade",
  description: "LinkShowCase - Ajude seus seguidores a descobrir tudo o que você faz, com um simples link."
}


export default async function UpgradePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen pb-20 p-6 flex flex-col items-center justify-center gap-4 pt-[0px]">
      <h2 className="text-2xl font-bold">Escolha o plano</h2>
      <div className="flex gap-4">
        <PlanButtons />
      </div>
    </div>
    </>
  );
}
