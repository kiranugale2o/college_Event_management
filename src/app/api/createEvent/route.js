import DatabaseConn from "@/database";
import Events from "@/model/Events";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await DatabaseConn();
    const { data } = await req.json();
    const addEvent = await Events.create(data);

    if (addEvent) {
      return NextResponse.json({
        success: true,
        message: "ADD Event Successfully !",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something Wrong try Again !",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
