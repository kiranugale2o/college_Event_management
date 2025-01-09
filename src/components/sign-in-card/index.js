"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import VerifyOtpCard from "../verify-otp-card";

const initialSignInData = {
  email: "",
  password: "",
};

export default function SignInCard() {
  const [currentSignInData, setCurrentSignInData] = useState(initialSignInData);
  const [loading, setLoading] = useState(false);
  function handleButtonDisabled() {
    if (
      currentSignInData.email.trim() === "" ||
      currentSignInData.password.trim() === ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  const router = useRouter();
  function handleSignIn() {
    setLoading(true);
    fetch("/api/sign-in", {
      method: "POST",
      body: JSON.stringify(currentSignInData),
    }).then((res) =>
      res.json().then((res) => {
        if (res.success) {
          Cookies.set("event_management", res.token);
          toast.success(res.message);
          router.refresh("/");
          setLoading(false);
        } else {
          toast.error(res.message);
          setLoading(false);
        }
      })
    );
  }

  //forget Password Handler
  async function handleForgetPassword() {
    sessionStorage.setItem("email", currentSignInData?.email);
    const email = currentSignInData?.email;
    //setEmail as Session Storage
    sessionStorage.setItem("email", email);
    if (email === "") {
      toast.error("First Enter Your Email");
      return;
    }
    fetch("/api/sign-in/forgetPassword", {
      method: "POST",
      body: JSON.stringify({ email }),
    }).then((res) =>
      res.json().then((res) => {
        if (res.success) {
          router.push("/sign-in/forgetPassword-email-verify");
        } else {
          toast.error(res.message);
        }
      })
    );
  }
  return (
    <>
      <Card className="mt-10 w-[350px] mx-auto lg:mt-auto shadow flex flex-col lg:w-[400px] item-center">
        <CardHeader className="p-6  ml-auto mr-auto mt-auto">
          <CardTitle className="text-[22px] mx-auto">
            Sign into Event Management
          </CardTitle>
          <CardDescription>
            Welcome to GSG Event Management ! Sign in your Account .
          </CardDescription>
        </CardHeader>
        <CardContent className=" gap-y-1.5 ">
          <form className="" action={handleSignIn}>
            <Label>Email address</Label>
            <Input
              required
              onChange={(e) => {
                setCurrentSignInData({
                  ...currentSignInData,
                  email: e.target.value,
                });
              }}
            />
            <br />
            <Label>Password</Label>
            <Input
              required
              type="password"
              onChange={(e) => {
                setCurrentSignInData({
                  ...currentSignInData,
                  password: e.target.value,
                });
              }}
            />

            <Button
              variant="outline"
              type="button"
              onClick={() => {
                handleForgetPassword();
              }}
              className="text-[13px] text-start mt-1 text-red-500  border-none hover:border-none hover:text-red-500 hover:bg-color-white-300"
            >
              Forget Password ?
            </Button>
            <br />
            <Button
              disabled={loading}
              type="submit"
              className=" p-0 w-full disabled:opacity-50"
              //   variant="secondary"
            >
              Sign in
            </Button>
          </form>
          <CardFooter className="mt-3">
            <p className="text">
              Don't have an account ?
              <Link className="font-semibold" href="/sign-up">
                Sing up
              </Link>
            </p>
          </CardFooter>
        </CardContent>
      </Card>
      <ToastContainer />
    </>
  );
}
