import ProjectCard from "@/app/components/commons/projectCard";
import { TotalVisits } from "@/app/components/commons/totalVisits";
import UserCard from "@/app/components/commons/user-card/userCard";
import { auth } from "@/app/lib/auth";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewProject from "./new-project";
import {
  getProfileData,
  getProfileProjects,
} from "@/app/server/get-profile-data";
import { getDownloadURLFromPath } from "@/app/lib/firebase";
import { increaseProfileVisits } from "@/app/actions/increase-profile-visits";
import { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "LinkShowCase - Perfil",
  description:
    "LinkShowCase - Ajude seus seguidores a descobrir tudo o que você faz, com um simples link.",
};

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;

  const profileData = await getProfileData(profileId);

  if (!profileData) return notFound();

  const projects = await getProfileProjects(profileId);
  const session = await auth();
  const isOwner = profileData.userId === session?.user?.id;

  if (!isOwner) {
    await increaseProfileVisits(profileId);
  }

  const projectsWithImages = await Promise.all(
    projects.map(async (project) => {
      const imageUrl = (await getDownloadURLFromPath(project.imagePath)) || "";
      return { ...project, imageUrl };
    }),
  );

  return (
    <div className="relative min-h-screen bg-background-primary overflow-x-hidden">
      {/* BACKGROUND DECORATIVO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-background-secondary/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-accent-green/10 rounded-full blur-3xl opacity-50" />
      </div>

      {/* BANNER TRIAL */}
      {session?.user.isTrial && !session?.user.isSubscribed && (
        <div className="sticky top-0 z-50 w-full bg-background-tertiary/80 backdrop-blur-md border-b border-border-secondary">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center items-center gap-4 text-sm md:text-base">
            <span className="text-content-body flex items-center gap-2">
              <Sparkles className="size-4 text-yellow-500 fill-yellow-500" />
              Você está usando a versão trial
            </span>
            <Link href={`/${profileId}/upgrade`}>
              <button className="bg-accent-purple hover:bg-accent-purple/90 text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1">
                Upgrade agora <ArrowRight size={12} />
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* COLUNA PERFIL */}
        <div className="w-full lg:w-[30%] flex justify-center lg:justify-start">
          <div className="lg:sticky lg:top-24 flex flex-col items-center gap-6">
            <UserCard isOwner={isOwner} profileData={profileData} />

            {isOwner && (
              <TotalVisits
                totalVisits={profileData.totalVisits}
                showBar={true}
              />
            )}
          </div>
        </div>

        {/* COLUNA PROJETOS */}
        <div className="w-full lg:w-[70%]">
          <div className="mb-6 pl-2 border-l-4 border-accent-green">
            <h2 className="text-xl font-bold text-content-heading">
              Meus Links & Projetos
            </h2>
            <p className="text-sm text-content-body">
              Explore meu conteúdo mais recente
            </p>
          </div>

          {/* Usando flex-col para forçar a ordenação um abaixo do outro */}
          <div className="flex flex-col gap-4 w-full">
            {isOwner && (
              <div className="w-full animate-fade-in-up">
                {/* Pode ser necessário ajustar o componente NewProject internamente para w-full também, caso ele tenha tamanho fixo */}
                <NewProject profileId={profileId} />
              </div>
            )}

            {projectsWithImages.map((project) => (
              <div key={project.id} className="w-full animate-fade-in-up">
                <ProjectCard
                  project={project}
                  isOwner={isOwner}
                  img={project.imageUrl}
                />
              </div>
            ))}
          </div>

          {!isOwner && projects.length === 0 && (
            <div className="text-center py-20 bg-background-secondary rounded-2xl border-dashed border-2 border-border-secondary opacity-70">
              <p className="text-content-body">
                Nenhum projeto publicado ainda.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* FOOTER FLUTUANTE SIMPLIFICADO */}
    </div>
  );
}
