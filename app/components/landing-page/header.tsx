import { auth } from "@/app/lib/auth";
import Button from "../landing-page/ui/button";
import Link from "next/link";
import { getProfileId } from "@/app/server/get-profile-data";
import { manageAuth } from "@/app/actions/manage-auth";
export default async function Header() {

  const session = await auth()

  const profileId = await getProfileId(session?.user?.id as string);
  

  return (
    <div className="relative top-0 left-0 right-0 max-w-7xl mx-auto py-10 px-6 flex flex-col items-center md:flex-row md:justify-between z-50">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="LinkShowCase Logo" />
        <h3 className="text-black text-2xl font-bold">LinkShowCase</h3>
      </div>
      <div className={`flex items-center gap-1 ${session ? 'flex-col mt-0 md:mt-0' : 'flex-row'}`}> 
        {session && (
          <Link href={`/${profileId}`}>
            <Button>Minha Página</Button>
          </Link>
        )}
        <form action={manageAuth}>
          <Button>{session ? "Sair" : "Login"}</Button>
        </form>
      </div>
    </div>
  );
}