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

  function addEvent() {
    const data = {
      OrganizerId: ProfileUser?._id,
      OrganizerName: ProfileUser?.organizer.name,
      totalContributingAmount: 0,
      totalSpentAmount: 0,
      RemainingBalance: 0,
      eventGallary:
        "https://firebasestorage.googleapis.com/v0/b/studybuddy-5a2fe.appspot.com/o/images%2Fgsglogo.png?alt=media&token=b25d4ee8-c81e-4ad1-b8af-98163bb392ab",
      ...currentEventData,
    };

    fetch("/api/createEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    })
      .then((res) => {
        // Log the entire response object
        console.log("Response from API:", res);

        // Check if the response is OK (status in the range 200-299)
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        // Log the parsed JSON response
        console.log("Parsed JSON response:", res);

        if (res.success) {
          // Check if the response has a toggle property before setting it
          if (res.toggle !== undefined) {
            res.toggle = true; // Only set toggle if it exists
          }

          toast.success(res.message);

          setCurrentEventData(eventInitialData); // Reset to initial data
          router.refresh(); // Refresh the current route
        } else {
          toast.error(res.message);
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        toast.error("Failed to add event. Please try again."); // Handle the error
      });
    setDialogBtn(false);
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
          <DialogDescription className="text-red-200">
            Note :If any application client error occurred then simply refresh
            the page !
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <CommonForm
            formData={eventFormField}
            currentData={currentEventData}
            setData={setCurrentEventData}
            buttonText={"Add Event"}
            buttonAction={addEvent}
          ></CommonForm>
        </div>
      </DialogContent>
      <ToastContainer />
    </Dialog>
  );
}
