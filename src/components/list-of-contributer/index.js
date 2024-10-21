"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { useRouter } from "next/navigation";
import { filterMenuDataArray, formUrlQuery } from "@/utils";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import CaptureImage from "../captured-image";
import RecepitCard from "../receipt-card";

export default function ListOfContibuter({
  data,
  eventName,
  eventDate,
  total,
  filterLists,
}) {
  const router = useRouter();
  const [filterParams, setFilterParams] = useState({});
  const [mytotal, setTotal] = useState(total);
  // Generate filterMenu
  const filterMenu = filterMenuDataArray.map((item) => ({
    id: item.id,
    name: item.label,
    options: [...new Set(data.map((listItem) => listItem[item.id]))],
  }));

  // Handle filter selection
  async function handleFilter(getfilterId, getOption) {
    const cpyFilterParams = { ...filterParams };

    if (!cpyFilterParams[getfilterId]) {
      cpyFilterParams[getfilterId] = [];
    }

    const indexOfCurrentOption = cpyFilterParams[getfilterId].indexOf(
      getOption
    );
    if (indexOfCurrentOption === -1) {
      cpyFilterParams[getfilterId].push(getOption);
    } else {
      cpyFilterParams[getfilterId].splice(indexOfCurrentOption, 1);
    }

    setFilterParams(cpyFilterParams);
    sessionStorage.setItem("filterParams", JSON.stringify(cpyFilterParams));
  }

  // Load filterParams from sessionStorage on initial render
  useEffect(() => {
    const storedParams = JSON.parse(sessionStorage.getItem("filterParams"));
    if (storedParams) {
      setFilterParams(storedParams);
    }
  }, []);

  // Update the URL with query parameters without page refresh
  useEffect(() => {
    if (Object.keys(filterParams).length > 0) {
      const url = formUrlQuery({
        params: window.location.search,
        data: filterParams,
      });
      router.push(url, { scroll: false }, { shallow: true });
    }

    sessionStorage.removeItem("filterParams");
  }, [filterParams]);

  return (
    <div className=" justify-between  p-2 lg:p-0">
      <div className="block">
        <h1>filter Contibuters List</h1>
        <Menubar className="flex w-[140px] ">
          {filterMenu.map((item) => (
            <MenubarMenu key={item.id}>
              <MenubarTrigger>{item.name}</MenubarTrigger>
              <MenubarContent>
                {item.options.map((menuItem, index) => (
                  <MenubarItem
                    key={index}
                    onClick={() => handleFilter(item.id, menuItem)}
                  >
                    <div
                      className={`h-4 w-4 border rounded border-gray-800 ${
                        filterParams[item.id]?.includes(menuItem)
                          ? "bg-black"
                          : ""
                      }`}
                    ></div>
                    <Label className="ml-2">{menuItem}</Label>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          ))}
        </Menubar>
      </div>
      <br />
      <Table className="border ">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>{" "}
            {/* Add a header for Serial Number */}
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Class Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterLists.map((data, index) => (
            <TableRow key={data.name}>
              <TableCell className="font-medium">{index + 1}</TableCell>{" "}
              {/* Serial Number */}
              <TableCell>
                {data.name}
                <br></br>
                <div className="flex gap-2">
                  <CaptureImage events={eventName} eventDate={eventDate} />
                  <RecepitCard
                    eventName={eventName}
                    data={data}
                    date={eventDate}
                  />
                </div>
              </TableCell>
              <TableCell>{data.class_Name}</TableCell>
              <TableCell>{data.date}</TableCell>
              <TableCell className="text-right">{data.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">Rs.{total}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
