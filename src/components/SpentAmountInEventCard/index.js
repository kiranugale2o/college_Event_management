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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getCurrentDate,
  spentAmountInEventFormField,
  spentAmountInitialData,
} from "@/utils";
import { useState } from "react";
import CommonForm from "../common-form";
import { useRouter } from "next/navigation";
export default function SpentAmountCard({ eventId }) {
  console.log(eventId, "eeeeeeeeeebb");

  const router = useRouter();
  const [dialogBtn, setDialogBtn] = useState(false);
  const [currentSpentMoneyInfo, setCurrentSpentMoney] = useState(
    spentAmountInitialData
  );

  function addSpentRecord() {
    const data = {
      date: getCurrentDate(),
      ...currentSpentMoneyInfo,
    };
    fetch("/api/addSpentMoney", {
      method: "POST",
      body: JSON.stringify({ data: data, id: eventId }),
    }).then((res) =>
      res.json().then((res) => {
        if (res.success) {
          toast.success(res.message);
          setCurrentSpentMoney(spentAmountInitialData);
          router.refresh("/events");
        } else {
          toast.error("Network problem");
        }
      })
    );
    setDialogBtn(false);
  }

  return (
    <>
      <Dialog open={dialogBtn} onOpenChange={setDialogBtn}>
        <Button variant="outline" onClick={() => setDialogBtn(true)}>
          Enter the amount spent on the Event
        </Button>

        <DialogContent className="sm:max-w-[485px]">
          <DialogHeader>
            <DialogTitle>Enter the amount spent on the Event</DialogTitle>
            <DialogDescription>
              Fill all Information of Event !
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <CommonForm
              formData={spentAmountInEventFormField}
              currentData={currentSpentMoneyInfo}
              setData={setCurrentSpentMoney}
              buttonText={"Add Spent Money Record "}
              buttonAction={addSpentRecord}
            ></CommonForm>
          </div>
        </DialogContent>
        <ToastContainer />
      </Dialog>
    </>
  );
}
