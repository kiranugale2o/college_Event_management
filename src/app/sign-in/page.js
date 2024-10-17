import { currentUser, fetchUser } from "@/actions";
import SignInCard from "@/components/sign-in-card";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const user = await currentUser();

  if (user) redirect("/");
  const ProfileUser = await fetchUser(user?.userId);
  console.log(user);
  if (user && !ProfileUser?._id) {
    redirect("/onboard");
  }
  return (
    <>
      <div className="p-auto lg:p-24">
        <SignInCard />
      </div>
    </>
  );
}
