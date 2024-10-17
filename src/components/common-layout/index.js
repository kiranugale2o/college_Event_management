"use client";
import { currentUser, fetchUser } from "@/actions";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import ProfileUser from "@/model/Profile";

export default function CommonLayout({ user, ProfileUser, children }) {
  return (
    <>
      {/* headers section */}
      <Navbar user={user} ProfileUser={ProfileUser} />
      <main>{children}</main>
    </>
  );
}
