import DatabaseConn from "@/database";
import { Events, Contributers } from "@/model/Events";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    await DatabaseConn();
    const { data, id } = await req.json();

    console.log("Received data:", data);
    console.log("Event ID:", id);

    // Create a new contributor
    const createContribute = await Contributers.create({
      name: data.name,
      class_Name: data.class_Name,
      date: data.date,
      amount: data.amount,
    });

    console.log("Created Contributor:", createContribute);

    // // Update the event's contributors
    const updateEventContributor = await Events.findOneAndUpdate(
      { _id: id?.id },
      {
        $push: {
          contributors: createContribute?._id,
        },
      },
      { new: true } // Return the updated document
    );

    console.log("Updated Event Contributor:", updateEventContributor);

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
    } else {
      return NextResponse.json({
        success: false,
        message: "Event not found or not updated",
      });
    }
  } catch (error) {
    console.log("Error occurred:", error);

    return NextResponse.json({
      success: false,
      message: "An error occurred while processing your request.",
    });
  }
}
