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
      show: true,
    },
  ];
  return (
    <>
      <div>
        <div className="flex  shadow justify-between item-center w-full bg-gray-100  h-auto ">
          <div class=" flex items-center w-full py-2 lg:p-0 justify-between lg:gap-2 text-[#111418]">
            <h2 class="text-[#111418]   p-3 lg:p-5  text-[25px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] font-montserrat">
              GSG Events
            </h2>
            <Sheet>
              <SheetTrigger className={`flex mt-0  mr-10  lg:hidden`}>
                <MenuIcon className="font-2xl  size-9   " />
              </SheetTrigger>

              <SheetContent className="py-24">
                <SheetTitle
                  className="uppercase text-2xl semibold  font-montserrat"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  GSG Events
                </SheetTitle>
                <div className=" flex flex-col lg:hidden justify-start  mt-6 gap-5   ">
                  {menuItems.map((d) => {
                    return (
                      <div key={d.name}>
                        {d.show ? (
                          <SheetClose asChild>
                            <Link
                              href={d.path}
                              className="font-semibold uppercase flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] hover:bg-sky-300 bg-sky-100 text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] "
                            >
                              {d.label}
                            </Link>
                          </SheetClose>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
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
