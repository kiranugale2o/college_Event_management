import { currentUser } from "@/actions";
import SignUpCard from "@/components/sign-up-card";

import { redirect } from "next/navigation";

export default async function SignUp() {
  const user = await currentUser();
  if (user) redirect("/");
  return (
    <>
      <div className="p-auto lg:p-24 ">
        <SignUpCard />
      </div>
    </>
  );
}
