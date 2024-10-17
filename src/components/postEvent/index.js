"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CommonForm from "../common-form";
import { eventFormField, eventInitialData } from "@/utils";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export function PostEvent({ ProfileUser }) {
  const [currentEventData, setCurrentEventData] = useState(eventInitialData);
  const [dialogBtn, setDialogBtn] = useState(false);
  const router = useRouter();
  function addEvnet() {
    const data = {
      OrganizerId: ProfileUser?._id,
      OrganizerName: ProfileUser?.organizer.name,
      totalContributingAmount: 0,
      totalSpentAmount: 0,
      ...currentEventData,
    };

    fetch("/api/createEvent", {
      method: "POST",
      body: JSON.stringify({ data: data }),
    }).then((res) =>
      res.json().then((res) => {
        if (res.success) {
          toast.success(res.message);
          setDialogBtn(false);
          setCurrentEventData("");
          router.refresh("/events");
        } else {
          toast.error(res.message);
        }
      })
    );
  }
  return (
    <Dialog open={dialogBtn} onOpenChange={setDialogBtn}>
      <Button variant="outline" onClick={() => setDialogBtn(true)}>
        Add New Event
      </Button>

      <DialogContent className="sm:max-w-[485px]">
        <DialogHeader>
          <DialogTitle>Add New Event</DialogTitle>
          <DialogDescription>Fill all Information of Event !</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <CommonForm
            formData={eventFormField}
            currentData={currentEventData}
            setData={setCurrentEventData}
            buttonText={"Add Event"}
            buttonAction={addEvnet}
          ></CommonForm>
        </div>
      </DialogContent>
      <ToastContainer />
    </Dialog>
  );
}
