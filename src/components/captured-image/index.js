"use client";
// components/CaptureImage.js

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Button } from "../ui/button";
import { getDayName, getMonthName } from "@/utils";

const CaptureImage = ({ events, eventDate }) => {
  const elementRef = useRef();

  const [dialogBtn, setDialogBtn] = useState(false);

  const handleCapture = async () => {
    const canvas = await html2canvas(elementRef.current);
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "captured-image.png"; // Specify the filename
    link.click();
  };

  return (
    <>
      <Dialog open={dialogBtn} onOpenChange={setDialogBtn}>
        <a
          className="underline underline-offset-1"
          onClick={() => setDialogBtn(true)}
        >
          Invitation
        </a>

        <DialogContent className="  h-[500px]  w-[360px] lg:w-[470px]">
          <DialogHeader></DialogHeader>
          <div ref={elementRef} className=" lg:mt-0  lg:mx-auto ">
            <div className="invitation-card ml-0 shadow-sm p-5 lg:p-10 lg:mx-[10px] w-[320px] lg:w-[400px]  ">
              <h1 className=" text-cyan-400 text-[25px]">
                {events} Invitation
              </h1>
              <p>Join us for an exciting day of fun and friendship!</p>
              <div className="details mx-auto">
                <p>
                  <strong>Date:</strong> {getDayName(eventDate)},{" "}
                  {getMonthName(eventDate)} {eventDate.split("-")[2]},{" "}
                  {eventDate.split("-")[0]}
                </p>
                <p>
                  <strong>Time:</strong> 10:00 AM
                </p>
                <p>
                  <strong>Venue:</strong>Gsg College Auditorium
                </p>
                <p>
                  <strong>Dress Code:</strong> Casual
                </p>
              </div>
              <Button className="bg-[#4caf50]">Let's Come</Button>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCapture}>Download</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="hidden"></div>
    </>
  );
};

export default CaptureImage;
