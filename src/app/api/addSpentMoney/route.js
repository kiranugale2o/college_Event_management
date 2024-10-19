import DatabaseConn from "@/database";
import { Events, Spentamount } from "@/model/Events";
import { Database } from "lucide-react";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await DatabaseConn();
    const { data, id } = await req.json();

    const addSpent = await Spentamount.create({
      name: data.name,
      amount: data.amount,
      date: data.date,
    });
    return NextResponse.json({
      success: true,
      id: addSpent?._id,
    });
  } catch (error) {
    console.log(error);

    NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
