"use client";

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

  return (
    <>
      <div className="flex flex-col w-full justify-between item-center ">
        <div className="text-[20px]">{Tabtext}</div>
        <div className="w-full p-10">
          <form action={buttonAction} className=" grid gap-5 grid-row-4 w-full">
            {formData.map((d) => {
              return (
                <>
                  <Input
                    required
                    key={d.label}
                    className="bg-white hover:bg-stone-50 p-auto text-1xl hover:drop-shadow-2xl hover:bg-white "
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
                </>
              );
            })}
            <Button
              type="submit"
              variant="outline"
              className=" bg-sky-400 lg:text-[15px] "
            >
              {buttonText}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
