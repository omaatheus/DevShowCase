import ProjectCard from "../commons/projectCard"
import { TotalVisits } from "../commons/totalVisits"
import UserCard from "../commons/user-card/userCard"
import Button from "./ui/button"
import CreateNow from "./ui/create-now"
import TextInput from "./ui/textinput"

export default function Hero({
    texts,
  }: {
    texts?: {
      title: string;
      description: string;
    };
  }) {
    return(
        <div className="flex h-screen">
            <div className="w-full flex flex-col gap-2 mt-[35vh]">
                <h1 className="text-5xl font-bold text-black leading-[64px]">{texts?.title || "Ajude seus seguidores a descobrir tudo o que você faz, com um simples link."}</h1>
                <h2 className="text-xl leading-6"> {texts?.description || "Crie sua própria página de projetos e compartilhe eles com o mundo."}
                    <br />
                    Acompanhe o engajamento com Analytics.
                </h2>
                <div className="flex items-center gap-2 w-full mt-[10vh]">
                    <CreateNow />
                </div>
            </div>
            <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
                <div className="relative">
                    <UserCard/>
                    <div className="absolute -bottom-[7%] -right-[45%]">
                        <TotalVisits totalVisits={2910} />


                    </div>
                    <div className="absolute top-[20%] -left-[45%] -z-10">
                    <ProjectCard
                    isOwner={false}
              name="Link Sobre um avanço tecnologico"
              description="Descrição detalhada"
              img="/project1.png"
            />
                    </div>
                    <div className="absolute -top-[5%] -left-[55%] -z-10">
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
    )
}