import { currentUser, fetchUser } from "@/actions";
import { redirect } from "next/navigation";

export default async function Admin() {
  const user = await currentUser();
  if (!user) redirect("/sign-up");

  const ProfileUser = await fetchUser(user?.userId);
  if (user && !ProfileUser?._id) {
    redirect("/onboard");
  }
  return <h1>Welcome !</h1>;
}
