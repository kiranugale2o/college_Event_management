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
import { Button } from "../ui/button";

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
      label: "Organizer",
      path: "/admin",
      show: user,
    },
  ];
  return (
    <>
      <div>
        <div className="flex  shadow justify-between item-center w-full bg-cyan-50  h-auto ">
          <div
            className="text-start w-full flex text-2xl font-semibold p-5 uppercase justify-between "
            onClick={() => {
              router.push("/");
            }}
          >
            GSG Events
            <Link className="lg:hidden" href={"/"}>
              <Button>Home</Button>
            </Link>
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
