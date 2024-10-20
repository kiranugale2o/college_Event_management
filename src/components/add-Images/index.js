"use client";

import {
  ContributorFormFields,
  ContibutersInitialData,
  getCurrentDate,
  storage,
} from "@/utils";
import { useState } from "react";
import CommonForm from "../common-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AddImages(eId) {
  const router = useRouter();

  const [dialogBtn, setDialogBtn] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const uploadImage = async (file) => {
    try {
      // Create a storage reference
      const storageRef = ref(storage, `images/${file.name}`); // Change the path as necessary

      // Upload the file
      await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);

      console.log("File available at", downloadURL);
      return downloadURL; // Return the download URL
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error; // Rethrow error for further handling if needed
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setDialogBtn(false);
    if (selectedFile) {
      const url = await uploadImage(selectedFile);
      setImageURL(url); // Save the URL to state or perform other actions
      fetch("/api/addImage", {
        method: "POST",
        body: JSON.stringify({ myurl: url, id: eId.eId }),
      }).then((res) =>
        res.json().then((res) => {
          if (res.success) {
            toast.success(res.message);
            setDialogBtn();
            setImageURL("");

            router.refresh("/events");
          } else {
            toast.error(res.message);
            setDialogBtn();
          }
        })
      );
    }
  };
  return (
    <>
      <Dialog open={dialogBtn} onOpenChange={setDialogBtn}>
        <Button variant="outline" onClick={() => setDialogBtn(true)}>
          Add Images
        </Button>

        <DialogContent className=" overflow-auto h-[250px]  w-[320px] lg:w-[400px]">
          <DialogHeader>
            <DialogTitle> Add Image</DialogTitle>
            <DialogDescription>
              Fill all Information of Event !
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <form action={handleUpload}>
              <Label htmlFor="img">Add image</Label>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <br />
                <Button className="mt-5" type="submit">
                  Upload
                </Button>
                {/* {imageURL && (
                  <div>
                    <h3>Uploaded Image:</h3>
                    <img
                      src={imageURL}
                      alt="Uploaded"
                      style={{ width: "300px" }}
                    />
                   
                  </div>
                )} */}
              </div>
            </form>
          </div>
        </DialogContent>
        <ToastContainer />
      </Dialog>
    </>
  );
}
