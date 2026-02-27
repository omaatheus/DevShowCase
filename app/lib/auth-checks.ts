import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export async function enforceSubscription(profileId: string) {
  const session = await auth();

  if (!session?.user) return; 

  const { isTrial, isSubscribed } = session.user;
               
  if (!isTrial && !isSubscribed) {
    redirect(`/${profileId}/upgrade`);
  }
}