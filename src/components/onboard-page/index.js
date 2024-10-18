"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  OrganizerInitialData,
  studentFormField,
  studentInitialData,
  teacherFormField,
  teacherInitialData,
} from "@/utils";
import CommonForm from "../common-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { Rss } from "lucide-react";
export default function OnboardPageCard({ user, email }) {
  const router = useRouter();
  const [tabButton, setButton] = useState("student");
  const [currentStudentData, setCurrentStudentData] = useState(
    studentInitialData
  );
  const [currentOrganizerData, setCurrentOrganizerData] = useState(
    OrganizerInitialData
  );
  const [currentTeacherData, setTeacherData] = useState(teacherInitialData);

  async function CreateProfile() {
    const studentformdata = {
      userId: user,
      email: email,
      userType: "student",
      student: currentStudentData,
    };

    const studentData = {
      formdata: studentformdata,
    };

    const Organizerformdata = {
      userId: user,
      email: email,
      userType: "organizer",
      organizer: currentOrganizerData,
    };

    const OrganizerData = {
      formdata: Organizerformdata,
    };

    const teacherData = {
      userId: user,
      email: email,
      userType: "teacher",
      teacher: currentTeacherData,
    };

    const PostTeacherData = {
      formdata: teacherData,
    };

    let profileData;
    if (tabButton === "student") {
      profileData = studentData;
    } else if (tabButton === "teacher") {
      profileData = PostTeacherData;
    } else {
      profileData = OrganizerData;
    }
    console.log(teacherData, "tes", tabButton, profileData, "dd");

    fetch("/api/createprofile", {
      method: "POST",
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          toast.success("Profile Created !");
          router.refresh("/onboard");
        } else {
          toast.error(res.message);
        }
      })
      .catch((er) => {
        console.log(er);
      });
  }

  return (
    <>
      <Tabs value={tabButton} onValueChange={setButton}>
        <div className="flex w-full justify-between p-0 lg:p-20">
          <div className="w-full ">
            <div className="block grid gap-4 grid-row-2 lg:flex flex-row justify-between border-b-4 p-10 lg:p-10 ">
              <h1 className="text-3xl font-bold">Onboard As {tabButton}</h1>
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="teacher">Teacher</TabsTrigger>
                <TabsTrigger value="organizer">Organizer</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="student">
              <CommonForm
                formData={studentFormField}
                currentData={currentStudentData}
                setData={setCurrentStudentData}
                buttonText={"Onboard As Student"}
                buttonAction={CreateProfile}
                Tabtext={"Student Can See All Information of Events"}
              />
            </TabsContent>
            <TabsContent value="teacher">
              <CommonForm
                formData={teacherFormField}
                currentData={currentTeacherData}
                setData={setTeacherData}
                buttonText={"Onboard As Teacher"}
                buttonAction={CreateProfile}
                Tabtext={"Teachers Can See All Information of Events"}
              />
            </TabsContent>
            <TabsContent value="organizer">
              <CommonForm
                formData={studentFormField}
                currentData={currentOrganizerData}
                setData={setCurrentOrganizerData}
                buttonText={"Onboard As Organizer"}
                buttonAction={CreateProfile}
                Tabtext={"Event Organizer Can Create or Handle Events "}
              />
            </TabsContent>
          </div>
        </div>
      </Tabs>
      <ToastContainer />
    </>
  );
}
