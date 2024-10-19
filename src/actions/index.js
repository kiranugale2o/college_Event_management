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
import { Events, Contributers, Spentamount } from "@/model/Events";

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

  const data = await Events.find({ OrganizerId: id })
    .populate({
      path: "contributors",
      model: Contributers,
    })
    .populate({
      path: "spentAmount",
      model: Spentamount,
    });
  if (data) {
    return JSON.parse(JSON.stringify(data));
  } else {
    return null;
  }
}

//get list of Contibuter
// export async function getAllContributerList(id, filterParams = {}) {
//   await DatabaseConn();

//   // const data = await Events.findOne({ _id: id })
//   //   .populate({
//   //     path: "contributors",
//   //     model: Contributers,
//   //   })
//   //   .populate({
//   //     path: "spentAmount",
//   //     model: Spentamount,
//   //   });
//   // if (data) {
//   //   return JSON.parse(JSON.stringify(data));
//   // } else {
//   //   return null;
//   // }

//   let updateParams = {};
//   Object.keys(filterParams).forEach((filterKey) => {
//     updateParams[filterKey] = { $in: filterParams[filterKey].split(",") };
//   });

//   const data = await Events.find(
//     { _id: id },
//     filterParams && Object.keys(filterParams).length > 0 ? updateParams : {}
//   )
//     .populate({
//       path: "contributors",
//       model: Contributers,
//     })
//     .populate({
//       path: "spentAmount",
//       model: Spentamount,
//     });

//   if (data) {
//     return JSON.parse(JSON.stringify(data));
//   } else {
//     return null;
//   }
// }

export async function getAllContributerList(id) {
  await DatabaseConn();

  const data = await Events.findOne({ _id: id })
    .populate({
      path: "contributors",
      model: Contributers,
    })
    .populate({
      path: "spentAmount",
      model: Spentamount,
    });
  if (data) {
    return JSON.parse(JSON.stringify(data));
  } else {
    return null;
  }
}

export async function FiltergetAllContributerList(id, filterParams = {}) {
  await DatabaseConn();

  // Fetch event data and populate contributors
  const data = await Events.findOne({ _id: id }).populate("contributors");

  if (data) {
    const { amount, class_Name } = filterParams;

    // Ensure amount is treated as a string for comparison
    const filteredContributors = data.contributors.filter((contributor) => {
      // Ensure that amount is compared correctly
      const amountMatches = amount
        ? String(contributor.amount) === String(amount)
        : true; // Convert to string for comparison
      const classNameMatches = class_Name
        ? contributor.class_Name === class_Name
        : true;

      return amountMatches && classNameMatches;
    });

    console.log(filteredContributors, "Filtered Contributors");
    // Fetch all contributors data

    const totalAmount = filteredContributors.reduce((total, contributor) => {
      // Parse the amount to a number before adding
      return total + parseFloat(contributor.amount);
    }, 0);
    const datas = {
      filteredContributors: filteredContributors,
      total: totalAmount,
    };

    return JSON.parse(JSON.stringify(datas));
  } else {
    console.log("No data found for the given ID");
    return null;
  }
}

//get all Events
export async function getAllEvents() {
  await DatabaseConn();

  const data = await Events.find({})

    .populate({
      path: "contributors",
      model: Contributers,
    })
    .populate({
      path: "spentAmount",
      model: Spentamount,
    });
  if (data) {
    return JSON.parse(JSON.stringify(data));
  } else {
    return null;
  }
}

//get single events
export async function getOneEvents(id) {
  await DatabaseConn();

  const data = await Events.find({ _id: id })

    .populate({
      path: "contributors",
      model: Contributers,
    })
    .populate({
      path: "spentAmount",
      model: Spentamount,
    });
  if (data) {
    return JSON.parse(JSON.stringify(data));
  } else {
    return null;
  }
}
