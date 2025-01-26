import { Github, Linkedin, Twitter, Facebook, Plus, Instagram } from "lucide-react"
import Button from "../../landing-page/ui/button"
import EditSocialLinks from "./edit-social-links"
import Link from "next/link"
import { ProfileData } from "@/app/server/get-profile-data"
import { formatUrl } from "@/app/lib/utils"
import AddCustomLink from "./add-custom-link"
import { getDownloadURLFromPath } from "@/app/lib/firebase"
import EditUserCard from "./edit-user-card"

export default async function UserCard({profileData, isOwner }: {profileData?: ProfileData; isOwner: boolean}){


  console.log(profileData);
  
    const icones = [
        Github, Linkedin, Twitter, Instagram
    ]

    return (
        <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#E3E9F0] rounded-3xl text-black">
            <div className="size-48">
                <img 
                src={
                  (await getDownloadURLFromPath(profileData?.imagePath)) || "https://www.github.com/omaatheus.png"
                }
                alt="" 
                className="rounded-full object-cover w-full h-full" />
            </div>
            <div className="flex flex-col gap-2 w-full ">
                <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold min-w-0 overflow-hidden" >{profileData?.name || "Matheus Silva"}</h3>
                    {isOwner && <EditUserCard profileData={profileData} />}
                </div>
                <p className="opacity-40"> {profileData?.description || "Eu faço produtos para a Internet"}</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <span className="uppercase text-xs font-medium">Links</span>
                <div className="flex gap-3">
                    {
                        profileData?.socialMedias.github && <Link href={profileData?.socialMedias.github} target="_blank" className="p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#FFFFFF]">
                        <Github />
                        </Link>
                    }
                    {
                        profileData?.socialMedias.instagram && <Link href={profileData?.socialMedias.instagram} target="_blank" className="p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#FFFFFF]">
                        <Instagram />
                        </Link>
                    }
                    {
                        profileData?.socialMedias.twitter && <Link href={profileData?.socialMedias.twitter} target="_blank" className="p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#FFFFFF]">
                        <Twitter />
                        </Link>
                    }
                    {
                        profileData?.socialMedias.linkedin && <Link href={profileData.socialMedias.linkedin} target="_blank" className="p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#FFFFFF]">
                        <Linkedin />
                        </Link>
                    }

                    {/* {
                        icones.map((Icon, i) => (
                            <button key={i} className="p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#FFFFFF]"><Icon />  </button>
                        ))
                    } */}
                     {isOwner && (
            <EditSocialLinks socialMedias={profileData?.socialMedias} />
          )}
                </div>
                
            </div>
            <div className="flex flex-col gap-3 w-full h-[172px]">
            {profileData?.link1?.url && profileData?.link1?.url !== "" && (
  <Link
    href={formatUrl(profileData.link1.url)}
    target="_blank"
    className="w-full"
  >
    <Button className="w-full">{profileData.link1.title}</Button>
  </Link>
)}
{profileData?.link2?.url && profileData?.link2?.url !== "" && (
  <Link
    href={formatUrl(profileData.link2.url)}
    target="_blank"
    className="w-full"
  >
    <Button className="w-full">{profileData.link2.title}</Button>
  </Link>
)}
{profileData?.link3?.url && profileData?.link3?.url !== "" && (
  <Link
    href={formatUrl(profileData.link3.url)}
    target="_blank"
    className="w-full"
  >
    <Button className="w-full">{profileData.link3.title}</Button>
  </Link>
)}
        </div>
        {isOwner && <AddCustomLink />}
    </div>
    )
}