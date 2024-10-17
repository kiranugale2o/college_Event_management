import DatabaseConn from "@/database";
import ProfileUser from "@/model/Profile";
// import ProfileUser from "@/model/profile";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  await DatabaseConn();
  try {
    const { formdata } = await req.json();
    const profile = await ProfileUser.create(formdata);

    if (profile) {
      return NextResponse.json({
        success: true,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went Wrong !",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
