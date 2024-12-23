"use client";
import { useEffect, useState } from "react";
import CommonCard from "../common-card";
import { PostEvent } from "../postEvent";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { useRouter } from "next/navigation";
import { filterMenuDataArray, formUrlQuery } from "@/utils";
import { Label } from "../ui/label";
export default function EventsPageCard({
  ProfileUser,
  OragnizerEvents,
  Events,
}) {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <div className=" block lg:flex item-baseline justify-between border-b p-10 lg:pb-6 lg:pt-20">
          <h1 className="text-3xl font-semibold lg:pl-8">
            {ProfileUser?.userType === "organizer"
              ? "Events Dashboard"
              : "See All Events"}
          </h1>
          <div className="flex  mt-5">
            {ProfileUser?.userType === "organizer" ? (
              <PostEvent ProfileUser={ProfileUser} />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:p-10">
          {ProfileUser?.userType === "organizer" ? (
            //organizer
            <>
              {OragnizerEvents && OragnizerEvents.length > 0 ? (
                <div className="p-3 lg:p-0 flex flex-wrap gap-3">
                  {OragnizerEvents.map((d) => {
                    return (
                      <CommonCard
                        eventName={d.eventName}
                        eventBranch={d.branch}
                        eventDate={d.date}
                        oragnizer={true}
                        eventId={d?._id}
                      />
                    );
                  })}
                </div>
              ) : (
                <h1 className="text-[20px]">Add a new Event</h1>
              )}
            </>
          ) : (
            <>
              {Events && Events.length > 0 ? (
                <div className="p-3 lg:p-0 flex flex-wrap gap-3">
                  {Events.map((d) => {
                    return (
                      <CommonCard
                        eventName={d.eventName}
                        eventBranch={d.branch}
                        eventDate={d.date}
                        oragnizer={false}
                        eventId={d?._id}
                      />
                    );
                  })}
                </div>
              ) : (
                <h1 className="text-[20px]">Not Found any Event</h1>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
