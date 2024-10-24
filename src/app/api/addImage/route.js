import DatabaseConn from "@/database";
import { Events } from "@/model/Events";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await DatabaseConn();
    const { myurl, id } = await req.json();
    const getData = await Events.updateOne(
      { _id: id },
      { $push: { eventGallary: myurl } }
    );
    if (getData) {
      return NextResponse.json({
        success: true,
        message: "Upload Successfully !",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Somthing Wrong Try Again",
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
