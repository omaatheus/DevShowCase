import ProjectCard from "@/app/components/commons/projectCard";
import { TotalVisits } from "@/app/components/commons/totalVisits";
import UserCard from "@/app/components/commons/user-card/userCard";
import { auth } from "@/app/lib/auth";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewProject from "./new-project";
import { getProfileData, getProfileProjects } from "@/app/server/get-profile-data";
import { getDownloadURLFromPath } from "@/app/lib/firebase";
import { increaseProfileVisits } from "@/app/actions/increase-profile-visits";


export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;
  const profileData = await getProfileData(profileId);

  if (!profileData) return notFound();

  // TODO: get projects

  const projects = await getProfileProjects(profileId);

  const session = await auth();

  const isOwner = profileData.userId === session?.user?.id;

  if (!isOwner) {
    await increaseProfileVisits(profileId);
  }

  // TODO: Adicionar page view

  // Se o usuario não estiver mais no trial, nao deixar ver o projeto. Redirecionar para upgrade
  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
        <span>Você está usando a versão trial.</span>
        <Link href={`/${profileId}/upgrade`}>
          <button className="text-[#4200cd] font-bold">
            Faça o upgrade agora!
          </button>
        </Link>
      </div>
      <div className="w-1/2 flex justify-center h-min">
        <UserCard isOwner={true} profileData={profileData} />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
      {projects.map(async (project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOwner={isOwner}
            img={(await getDownloadURLFromPath(project.imagePath) || "") }
          />
        ))}
        {isOwner && <NewProject profileId={profileId} />}
      </div>
      <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
      {isOwner && (
        <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
          <TotalVisits totalVisits={profileData.totalVisits} />
        </div>
      )}
      </div>
    </div>
  );
}