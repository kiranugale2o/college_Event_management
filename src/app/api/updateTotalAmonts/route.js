import { Events } from "@/model/Events";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { cid, eid, data } = await req.json();

    // Update the event's contributors
    const updateEventContributor = await Events.findOneAndUpdate(
      { _id: eid?.id },
      {
        $push: {
          contributors: cid,
        },
      },
      { new: true } // Return the updated document
    );

    if (updateEventContributor) {
      // Update the total contributing amount
      await Events.updateOne(
        { _id: updateEventContributor._id },
        {
          totalContributingAmount:
            updateEventContributor?.totalContributingAmount +
            Number(data.amount),
        }
      );
      await Events.updateOne(
        { _id: updateEventContributor._id },
        {
          RemainingBalance:
            updateEventContributor?.totalContributingAmount +
            Number(data.amount) -
            updateEventContributor.totalSpentAmount,
        }
      );
      return NextResponse.json({
        success: true,

        message: "Contributor added successfully!",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
