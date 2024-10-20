"use client";

import {
  ContributorFormFields,
  ContibutersInitialData,
  getCurrentDate,
} from "@/utils";
import { useState } from "react";
import CommonForm from "../common-form";
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
import { useRouter } from "next/navigation";

export default function AddContribute(id) {
  const router = useRouter();

  const [currentContributerData, setCurrentContributeData] = useState(
    ContibutersInitialData
  );
  const [dialogBtn, setDialogBtn] = useState(false);
  function handleContibuter() {
    const data = {
      ...currentContributerData,
      date: getCurrentDate(),
    };

    fetch("api/addContributer", {
      method: "POST",
      body: JSON.stringify({ data: data, id: id }),
    }).then((res) =>
      res.json().then((res) => {
        if (res.success) {
          res.toggle = true; // This is now safe
          toast.success(res.message);
          setCurrentContributeData(ContibutersInitialData);
          router.refresh("/events");
        } else {
          toast.error(res.message);
        }
      })
    );
    setDialogBtn(false);
  }
  return (
    <>
      <Dialog open={dialogBtn} onOpenChange={setDialogBtn}>
        <Button variant="outline" onClick={() => setDialogBtn(true)}>
          Add Contributer
        </Button>

        <DialogContent className=" overflow-auto h-[400px]  w-[320px] lg:w-[400px]">
          <DialogHeader>
            <DialogTitle> Add Contributer</DialogTitle>
            <DialogDescription>
              Fill all Information of Event !
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <CommonForm
              formData={ContributorFormFields}
              currentData={currentContributerData}
              setData={setCurrentContributeData}
              buttonText={"ADD Contibuter "}
              buttonAction={handleContibuter}
            />
          </div>
        </DialogContent>
        <ToastContainer />
      </Dialog>
    </>
  );
}
