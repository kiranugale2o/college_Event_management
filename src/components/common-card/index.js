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

export default function CommonCard({
  eventId,
  eventName,
  eventBranch,
  eventDate,
  oragnizer,
}) {
  const router = useRouter();
  return (
    <>
      <Card className="w-[340px] lg:w-[400px] shadow-md ">
        <CardHeader>
          <CardTitle className="flex ">
            <PartyPopper />
            <div className="text-[25px] ml-5">{eventName}</div>
          </CardTitle>

          {eventBranch ? <CardTitle>{eventBranch}</CardTitle> : null}
          {eventDate ? <CardDescription>{eventDate}</CardDescription> : null}
        </CardHeader>

        <CardFooter className="flex flex-wrap lg:flex gap-2">
          {oragnizer ? <AddContribute id={eventId} /> : null}
          <Button onClick={() => router.push(`/events/${eventId}`)}>
            View Contibuters
          </Button>

          {!oragnizer ? (
            <Button onClick={() => router.push(`/events/${eventId}/update`)}>
              See Event Details
            </Button>
          ) : (
            <Button onClick={() => router.push(`/events/${eventId}/update`)}>
              Update
            </Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
}