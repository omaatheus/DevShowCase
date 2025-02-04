import ProjectCard from "@/app/components/commons/projectCard";
import { TotalVisits } from "@/app/components/commons/totalVisits";
import UserCard from "@/app/components/commons/user-card/userCard";
import { auth } from "@/app/lib/auth";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import NewProject from "./new-project";
import { getProfileData, getProfileProjects } from "@/app/server/get-profile-data";
import { getDownloadURLFromPath } from "@/app/lib/firebase";
import { increaseProfileVisits } from "@/app/actions/increase-profile-visits";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkShowCase - Perfil",
  description: "LinkShowCase - Ajude seus seguidores a descobrir tudo o que você faz, com um simples link."
}

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

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row p-4 pb-20 md:p-20 overflow-auto">
      {session?.user.isTrial && !session?.user.isSubscribed && (
        <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary text-sm md:text-base">
          <span>Você está usando a versão trial.</span>
          <Link href={`/${profileId}/upgrade`}>
            <button className="text-[#5000b9] font-bold">Faça o upgrade agora!</button>
          </Link>
        </div>
      )} 
      <div className="w-full md:w-1/3 flex justify-center h-min mb-6 md:mb-0 mt-6">
        <UserCard isOwner={true} profileData={profileData} />
      </div>
      <div className="w-full md:w-2/3 flex flex-wrap justify-center content-start gap-6 overflow-visible">
        {projects.map(async (project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOwner={isOwner}
            img={(await getDownloadURLFromPath(project.imagePath) || "")}
          />
        ))}
        {isOwner && <NewProject profileId={profileId} />}
      </div>
      {isOwner && (
        <div className="absolute bottom-4 right-0 left-0 w-min mx-auto mt-100">
          <TotalVisits totalVisits={profileData.totalVisits} showBar />
        </div>
      )}
    </div>
  );
}