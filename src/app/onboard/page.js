import { currentUser, fetchUser } from "@/actions";
import OnboardPageCard from "@/components/onboard-page";
import { redirect } from "next/navigation";

export default async function OnboardPage(params) {
  const user = await currentUser();
  if (!user) redirect("/sign-up");
  const ProfileUser = await fetchUser(user?.userId);
  if (ProfileUser?._id) {
    redirect("/");
  }
  return (
    <>
      <OnboardPageCard user={user?.userId} email={user?.email} />
    </>
  );
}
