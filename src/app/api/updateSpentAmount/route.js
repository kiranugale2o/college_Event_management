import { Events } from "@/model/Events";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { data, addSpentId, id } = await req.json();

    const updateEventSpentRecords = await Events.findOneAndUpdate(
      { _id: id }, // Filter to find the document
      {
        $push: {
          spentAmount: addSpentId,
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

      await Events.updateOne(
        { _id: updateEventSpentRecords._id },
        {
          RemainingBalance:
            updateEventSpentRecords.totalContributingAmount -
            (updateEventSpentRecords.totalSpentAmount + Number(data.amount)),
        }
      );

      return NextResponse.json({
        success: true,
        message: "add !",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "not add try again!",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: true,
      message: error.message,
    });
  }
}
