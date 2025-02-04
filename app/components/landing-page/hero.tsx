import ProjectCard from "../commons/projectCard";
import { TotalVisits } from "../commons/totalVisits";
import UserCard from "../commons/user-card/userCard";
import CreateNow from "./ui/create-now";
export default function Hero({
    texts,
  }: {
    texts?: {
      title: string;
      description: string;
    };
  }) {
    return (
        <div className="flex flex-col md:flex-row min-h-screen p-4 pb-20">
        <div className="w-full flex flex-col gap-2 mt-[20vh] md:mt-[35vh]">
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight md:leading-[64px]">
            {texts?.title || "Ajude seus seguidores a descobrir tudo o que você faz, com um simples link."}
          </h1>
          <h2 className="text-lg md:text-xl leading-6">
            {texts?.description || "Crie sua própria página de projetos e compartilhe eles com o mundo."}
            <br />
            Acompanhe o engajamento com Analytics.
          </h2>
          <div className="flex items-center gap-2 w-full mt-[10vh]">
            <CreateNow />
          </div>
        </div>
        <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
          <div className="relative flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-center">
            <UserCard />
            
            {/* Ajuste do TotalVisits para o breakpoint md */}
            <div className="flex justify-center mt-4 md:mt-0 md:absolute md:-bottom-[7%] right-0">
              <TotalVisits totalVisits={2910} />
            </div>
            
            {/* Ajuste dos ProjectCard para o breakpoint md */}
            <div className="flex flex-col gap-4 mt-4 md:mt-0 md:flex-row md:gap-4 md:absolute md:top-[110%] md:left-100">
                
              <ProjectCard
                isOwner={false}
                name="Link Sobre um avanço tecnológico"
                description="Descrição detalhada"
                img="/project1.png"
              />
              <ProjectCard
                isOwner={false}
                name="Link sobre uma pesquisa científica"
                description="Descrição detalhada"
                img="/project2.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  