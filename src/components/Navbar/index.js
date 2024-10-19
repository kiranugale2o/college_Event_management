"use client";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";

export default function Navbar({ user, ProfileUser }) {
  const router = useRouter();
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },

    {
      label: "events",
      path: "/events",
      show: ProfileUser,
    },
    {
      label: "As Organizer",
      path: "/admin",
      show: ProfileUser,
    },
  ];
  return (
    <>
      <div>
        <div className="flex shadow justify-between item-center w-full bg-cyan-50  h-auto ">
          <div
            className="text-start w-full text-2xl font-semibold p-5 uppercase "
            onClick={() => {
              router.push("/");
            }}
          >
            GSG Event Management
          </div>

          <div className=" hidden lg:flex flex-row mt-6   grid gap-10 grid-cols-3 mr-5">
            {menuItems.map((d) => {
              return (
                <>
                  {d.show ? (
                    <Link
                      href={d.path}
                      className="text-1.3xl  hover:text-yellow-300 p-auto font-semibold uppercase"
                    >
                      {d.label}
                    </Link>
                  ) : null}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
