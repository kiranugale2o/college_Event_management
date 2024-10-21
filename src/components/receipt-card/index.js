"use client";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { getDayName, getMonthName } from "@/utils";

export default function RecepitCard({ eventName, data, date }) {
  const elementRef = useRef();
  const [dialogBtn, setDialogBtn] = useState(false);

  const handleCapture = async () => {
    const canvas = await html2canvas(elementRef.current);
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "eventReceipt.png"; // Specify the filename
    link.click();
  };

  return (
    <div>
      <Dialog open={dialogBtn} onOpenChange={setDialogBtn}>
        <a
          className="underline underline-offset-1"
          onClick={() => setDialogBtn(true)}
        >
          Receipt
        </a>

        <DialogContent className="  h-[450px]  w-[360px] lg:w-[470px]">
          <DialogHeader></DialogHeader>
          <div ref={elementRef} className=" lg:mt-0  lg:mx-auto ">
            <div className="receipt ml-0  p-5 lg:p-10 lg:mx-[10px] w-[300px] lg:w-[400px] ">
              <h1>Contribution Receipt</h1>
              <div class="details">
                <p>
                  <strong>Student Name:</strong> {data?.name}
                </p>

                <p>
                  <strong>Event:</strong>
                  {eventName}
                </p>
                <p>
                  <strong>Date:</strong> {getDayName(date)},{" "}
                  {getMonthName(date)} {date.split("-")[2]} ,{" "}
                  {date.split("-")[0]}
                </p>
              </div>
              <div class="amount">Amount Contributed: Rs.{data?.amount}</div>
              <div class="footer">Thank you for your contribution!</div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCapture}>Download</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
