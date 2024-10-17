"use client";
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
import { useEffect, useState } from "react";

export default function ListOfContibuter({ data, eventName, total }) {
  return (
    <>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Class Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.name}>
              <TableCell className="font-medium">{data.name}</TableCell>

              <TableCell>{data?.class_Name}</TableCell>
              <TableCell>{data.date}</TableCell>
              <TableCell className="text-right">{data.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">Rs.{total}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
