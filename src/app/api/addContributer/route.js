import Events from "@/model/Events";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { data, id } = await req.json();
    const updateEventContibuter = await Events.findOneAndUpdate(
      { _id: id?.id }, // Filter to find the document
      {
        $push: {
          contributors: {
            name: data.name,
            class_Name: data.class_Name,
            date: data.date,
            amount: data.amount,
          },
        },
      }
    );

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
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
    });
  }
}
