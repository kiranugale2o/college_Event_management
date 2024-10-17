import { currentUser, fetchUser, getAllContributerList } from "@/actions";
import SpentAmountCard from "@/components/SpentAmountInEventCard";
import UpdateEvent from "@/components/update-Event";
import { redirect } from "next/navigation";

export default async function UpdateEventsInfo({ params }) {
  const { eventContributerId } = params;
  const data = await getAllContributerList(eventContributerId);

  const user = await currentUser();
  if (!user) redirect("/sign-up");

  const ProfileUser = await fetchUser(user?.userId);
  if (user && !ProfileUser?._id) {
    redirect("/onboard");
  }

  return (
    <div className="lg:p-24">
      <UpdateEvent
        data={data}
        eventId={eventContributerId}
        SpentAmount={data.spentAmount}
        ProfileUser={ProfileUser}
      />
    </div>
  );
}
