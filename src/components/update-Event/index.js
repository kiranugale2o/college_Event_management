"use client";
import { PartyPopper } from "lucide-react";
import { Button } from "../ui/button";
import SpentAmountCard from "../SpentAmountInEventCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableFooter,
  TableRow,
} from "@/components/ui/table";

export default function UpdateEvent({
  data,
  eventId,
  SpentAmount,
  ProfileUser,
}) {
  return (
    <>
      <div className="flex flex-col item-center justify-between">
        <div className="text-[25px] font-semibold p-3">
          {ProfileUser?.userType !== "organizer"
            ? "See The Event Details "
            : "Update Event Information"}
        </div>
        <hr />
        <div className="flex py-10 lg:justify-between flex-wrap">
          <div className="text-2xl flex  gap-3 font-semibold">
            <PartyPopper /> {data.eventName} <PartyPopper />
          </div>
          <div className="text-xl text-right ">{data.date}</div>
        </div>

        <div className="block lg:flex justify-between ">
          <h1 className="text-[25px]">
            Full deposit amount : Rs.{data.totalContributingAmount}
          </h1>
          <br />
          {ProfileUser?.userType !== "organizer" ? (
            <></>
          ) : (
            <SpentAmountCard eventId={eventId} />
          )}
        </div>
        <div className="py-10">
          <Table className="border">
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead className="w-[180px]">
                  Money Spent field Name
                </TableHead>

                <TableHead>Date</TableHead>
                <TableHead className="text-right">spent Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SpentAmount.map((data, index) => (
                <TableRow key={data.name}>
                  <TableCell className="font-medium">{index + 1}</TableCell>{" "}
                  <TableCell className="font-medium">{data.name}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell className="text-right">{data.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">
                  Rs.{data.totalSpentAmount}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        <br />
        <hr />
        <div className="flex flex-col ">
          <h1 className="text-[20px] lg:text-[25px]">
            Full deposit amount : Rs.{data.totalContributingAmount}
          </h1>
          <div className="text-[20px] lg:text-[25px] ">
            Total Spent Amount On Event : Rs.{data.totalSpentAmount}
          </div>
          <div className="text-[20px] lg:text-[25px] ">
            Remaining balance : Rs.{data.RemainingBalance}
          </div>
          <br />
          {data.totalSpentAmount < data.totalContributingAmount ? (
            <div className="text-[20px] text-green-600 bg-gray-200 shadow-lg">
              That Time This Event Is balanced . Because This Event Expenses
              amount Is less than Total deposit
            </div>
          ) : (
            <div className="text-[20px] text-red-600  bg-gray-200 shadow-lg border p-3 rounded-full">
              That Time This Event Is Unbalanced . Because This Event Expenses
              amount Is greater than than Total deposit
            </div>
          )}
        </div>
      </div>
    </>
  );
}
