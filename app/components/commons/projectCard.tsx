"use client";


import { deleteProject } from "@/app/actions/deleteProject";
import { increaseProjectVisits } from "@/app/actions/increase-project-visits";
import { formatUrl } from "@/app/lib/utils";
import { ProjectData } from "@/app/server/get-profile-data";
import { log } from "console";
import { Pencil, PencilIcon } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";


export default function ProjectCard({
  project,
  isOwner,
  img,
  name,
  description
}: {
  project?: ProjectData;
  isOwner: boolean;
  img: string;
  name?: string;
  description?: string
}) {
  const { profileId } = useParams();
  const formattedUrl = formatUrl(project?.projectUrl || "");
  const router = useRouter()

  async function handleClick() {
    if (!profileId || !project?.id || isOwner) return;

    await increaseProjectVisits(profileId as string, project.id);
  }

  async function handleDeleteProject() {
  
    if (!profileId || !project?.id) return;
  
    try {
      await deleteProject(profileId as string, project.id);
      router.refresh();
      
    } catch (error) {
      console.error(error);
    }
  }


  if (!isOwner) {
    return (
      <Link href={formattedUrl} target="_blank" onClick={handleClick}>
      <div className="w-[340px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
        <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
          <img src={img} alt="Link" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-black font-bold">
              {name || project?.projectName}
            </span>
            <span className="text-content-body text-sm">
              {description || project?.projectDescription}
            </span>
          </div>
        </div>
      </div>
    </Link>
    )
  } else {
    return (
    
      <div className="w-[340px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
        <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
          <img src={img} alt="Link" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          {isOwner && (
            <span className="uppercase text-xs font-bold text-[#5000b9]">
              {project?.totalVisits || 0} cliques
            </span>
          )}
          <button
          onClick={handleDeleteProject}
          className="p-1.5 rounded-full justify-center items-center shadow"
          title="Excluir link"
          
        ><h2>Excluir Link</h2>
        </button>
          

          <div className="flex flex-col">
            <span className="text-black font-bold">
              {name || project?.projectName}
            </span>
            <span className="text-content-body text-sm">
              {description || project?.projectDescription}
            </span>
          </div>
        </div>
      </div>
      
    );
  }

  
}