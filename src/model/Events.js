import { OrganizerEvent } from "@/actions";
import { Type } from "lucide-react";
import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  OrganizerId: String,
  OrganizerName: {
    type: String,
    require: true,
  },
  eventName: String,
  branch: String,
  date: String,
  eventsImages: [
    {
      type: String,
    },
  ],
  contributors: [
    {
      name: String,
      date: String,
      amount: String,
      class_Name: String,
    },
  ],
  totalContributingAmount: Number,
  totalSpentAmount: Number,
  spentAmount: [
    {
      name: String,
      date: String,
      amount: String,
    },
  ],
});

const Events =
  mongoose.models.Events || new mongoose.model("Events", EventSchema);
export default Events;
