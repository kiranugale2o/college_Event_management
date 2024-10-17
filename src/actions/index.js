"use server";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import cookie from "cookie";
import { headers } from "next/headers";
import { parse } from "cookie";
// import DatabaseConn from "@/database";
import { cookies } from "next/headers";
import DatabaseConn from "@/database";
import ProfileUser from "@/model/Profile";
import Events from "@/model/Events";

//fetch Current User is exit or not
export async function currentUser() {
  const headersList = headers();
  const cookieHeader = headersList.get("cookie") || "";
  // Parse cookies
  const cookies = parse(cookieHeader);

  // // Deserialize the object
  const myObject = cookies["event_management"];

  if (myObject) {
    return jwt.verify(
      myObject,
      process.env.TOKEN_SECRET_KEY,
      (err, decoded) => {
        if (err) {
          // Token is invalid or expired
          console.log(err);
          return null;
        }
        // Token is valid
        return decoded;
      }
    );
  }
}

//fetch exiting user data and return
export async function fetchUser(id) {
  await DatabaseConn();

  const data = await ProfileUser.findOne({ userId: id });
  if (data) {
    return JSON.parse(JSON.stringify(data));
  } else {
    return null;
  }
}

//get Oragnizer Events
export async function OrganizerEvent(id) {
  await DatabaseConn();

  const data = await Events.find({ OrganizerId: id });
  if (data) {
    return JSON.parse(JSON.stringify(data));
  } else {
    return null;
  }
}

//get list of Contibuter
export async function getAllContributerList(id) {
  await DatabaseConn();

  const data = await Events.findOne({ _id: id });
  if (data) {
    return JSON.parse(JSON.stringify(data));
  } else {
    return null;
  }
}

//get all Events
export async function getAllEvents() {
  await DatabaseConn();

  const data = await Events.find({});
  if (data) {
    return JSON.parse(JSON.stringify(data));
  } else {
    return null;
  }
}
