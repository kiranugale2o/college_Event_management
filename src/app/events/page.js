import {
  currentUser,
  fetchUser,
  getAllEvents,
  OrganizerEvent,
} from "@/actions";
import EventsPageCard from "@/components/event-page";
import { redirect } from "next/navigation";

export default async function EventsPage() {
  const user = await currentUser();
  const ProfileUser = await fetchUser(user?.userId);
  // const user = await currentUser();
  if (!user) redirect("/sign-up");

  // const ProfileUser = await fetchUser(user?.userId);
  if (user && !ProfileUser?._id) {
    redirect("/onboard");
  }

  const OragnizerEvents = await OrganizerEvent(ProfileUser?._id);
  const Events = await getAllEvents();

  return (
    <>
      <EventsPageCard
        ProfileUser={ProfileUser}
        OragnizerEvents={OragnizerEvents}
        Events={Events}
      />
    </>
  );
}
