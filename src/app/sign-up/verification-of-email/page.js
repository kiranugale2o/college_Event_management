import { currentUser } from "@/actions";
import VerifyOtpCard from "@/components/verify-otp-card";
import { redirect } from "next/navigation";

export default async function VerficitionOfEmail() {
  return (
    <>
      <div className="lg:p-24">
        <VerifyOtpCard otpVerificationType={"sign-up"} />
      </div>
    </>
  );
}
