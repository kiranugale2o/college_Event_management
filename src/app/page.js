import {
  currentUser,
  fetchUser,
  getAllEvents,
  OrganizerEvent,
} from "@/actions";
import EventsPageCard from "@/components/event-page";
import HomePage from "@/components/Home";

import Image from "next/image";

import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  // if (!user) redirect("/sign-up");

  const ProfileUser = await fetchUser(user?.userId);
  if (user && !ProfileUser?._id) {
    redirect("/onboard");
  }

  const Events = await getAllEvents();

  return (
    <>
      <HomePage Events={Events} />
    </>
  );
}
