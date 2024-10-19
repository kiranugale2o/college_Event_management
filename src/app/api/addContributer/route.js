import { Events, Contributers } from "@/model/Events";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { data, id } = await req.json();

    console.log("Received data:", data);
    console.log("Event ID:", id);

    const createContribute = await Contributers.create({
      name: data.name,
      class_Name: data.class_Name,
      date: data.date,
      amount: data.amount,
    });

    console.log("Created Contributor:", createContribute);

    const updateEventContibuter = await Events.findOneAndUpdate(
      { _id: id?.id },
      {
        $push: {
          contributors: createContribute?._id,
        },
      }
    );

    console.log("Updated Event Contributor:", updateEventContibuter);

    if (updateEventContibuter) {
      await Events.updateOne(
        { _id: updateEventContibuter._id },
        {
          totalContributingAmount:
            updateEventContibuter.totalContributingAmount + Number(data.amount),
        }
      );

      return NextResponse.json({
        success: true,
        message: "add !",
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
