import DatabaseConn from "@/database";
import Events from "@/model/Events";
import { Database } from "lucide-react";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await DatabaseConn();
    const { data, id } = await req.json();

    const updateEventSpentRecords = await Events.findOneAndUpdate(
      { _id: id }, // Filter to find the document
      {
        $push: {
          spentAmount: {
            name: data.name,
            amount: data.amount,
            date: data.date,
          },
        },
      }
    );

    if (updateEventSpentRecords) {
      await Events.updateOne(
        { _id: updateEventSpentRecords._id },
        {
          totalSpentAmount:
            updateEventSpentRecords.totalSpentAmount + Number(data.amount),
        }
      );

      return NextResponse.json({
        success: true,
        message: "add !",
      });
    } else {
      return NextResponse.json({
        success: false,
      });
    }
  } catch (error) {
    console.log(error);

    NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
