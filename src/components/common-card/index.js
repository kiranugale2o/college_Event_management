"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PartyPopper } from "lucide-react";
import { Button } from "../ui/button";
import AddContribute from "../add-Contibuter";
import { useRouter } from "next/navigation";
import AddImages from "../add-Images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CommonCard({
  eventId,
  eventName,
  eventBranch,
  eventDate,
  oragnizer,
}) {
  const router = useRouter();
  console.log("eventid", eventId);

  return (
    <>
      <Card className="w-[350px] lg:w-[380px] ">
        <CardHeader>
          <CardTitle className="flex ">
            <Avatar size="10">
              <AvatarImage src="gsglogo.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="text-[25px] mt-2 font-sans ">{eventName}</div>
          </CardTitle>

          {eventBranch ? <CardTitle>{eventBranch}</CardTitle> : null}
          {eventDate ? <CardDescription>{eventDate}</CardDescription> : null}
        </CardHeader>

        <CardFooter className="flex flex-wrap lg:flex gap-2">
          {oragnizer ? <AddContribute id={eventId} /> : null}
          <Button onClick={() => router.push(`/events/${eventId}`)}>
            View Contributors
          </Button>

          {!oragnizer ? (
            <Button onClick={() => router.push(`/events/${eventId}/updates`)}>
              See Event Details
            </Button>
          ) : (
            <Button onClick={() => router.push(`/events/${eventId}/updates`)}>
              Update
            </Button>
          )}

          {!oragnizer ? null : <AddImages eId={eventId} />}
          <Button onClick={() => router.push(`/events/${eventId}/gallery`)}>
            Gallery
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
