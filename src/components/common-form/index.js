"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function CommonForm({
  formData,
  currentData,
  setData,
  buttonText,
  buttonAction,
  handleFileChange,
  Tabtext,
}) {
  console.log(currentData);
  // Define your options
  const classOptions = ["Bca-II", "Bca-III"];

  // State to hold the selected class
  const [selectedClass, setSelectedClass] = useState("");

  return (
    <>
      <div className="flex flex-col w-full justify-between item-center ">
        <div className="text-[20px]">{Tabtext}</div>
        <div className="w-full lg:p-5">
          <form action={buttonAction} className="grid gap-5 grid-row-4 w-full">
            {formData.map((d) => {
              return (
                <>
                  {d?.type === "select" ? (
                    <div>
                      <label
                        htmlFor="classSelect"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Select Class:
                      </label>
                      <select
                        id="classSelect"
                        value={currentData?.[d.name] || ""}
                        onChange={(e) => {
                          setData({
                            ...currentData,
                            [d.name]: e.target.value,
                          });
                        }}
                        className="border border-gray-300 rounded p-2"
                      >
                        <option value="">--Please choose an option--</option>
                        {classOptions.map((className, index) => (
                          <option key={index} value={className}>
                            {className}
                          </option>
                        ))}
                      </select>

                      {/* Display the selected class if needed */}
                      {selectedClass && (
                        <p className="mt-2">You selected: {selectedClass}</p>
                      )}
                    </div>
                  ) : (
                    <Input
                      required
                      key={d.label}
                      className="bg-white hover:bg-stone-50 w-full p-auto text-1xl hover:drop-shadow-2xl hover:bg-white "
                      type={d.contentType}
                      disabled={d.disabled}
                      value={currentData?.[d.name] || ""}
                      name={d.name}
                      onChange={(e) => {
                        setData({
                          ...currentData,
                          [d.name]: e.target.value,
                        });
                      }}
                      placeholder={d.placeholder}
                    ></Input>
                  )}
                </>
              );
            })}
            <Button type="submit" className=" bg-sky-400  lg:text-[15px] ">
              {buttonText}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
