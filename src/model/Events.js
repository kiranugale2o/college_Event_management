import { OrganizerEvent } from "@/actions";
import { Type } from "lucide-react";
import mongoose from "mongoose";

const contributerSchema = new mongoose.Schema({
  name: String,
  date: String,
  amount: String,
  class_Name: String,
});

export const Contributers =
  mongoose.models.Contributers ||
  new mongoose.model("Contributers", contributerSchema);

const spentAmountSchema = new mongoose.Schema({
  name: String,
  date: String,
  amount: String,
});

export const Spentamount =
  mongoose.models.Spentamount ||
  new mongoose.model("Spentamount", spentAmountSchema);

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
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Contributers",
    },
  ],
  totalContributingAmount: Number,
  totalSpentAmount: Number,
  RemainingBalance: Number,
  spentAmount: [
    {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Spentamount",
    },
  ],
  eventGallary: [
    {
      type: String,
    },
  ],
});

export const Events =
  mongoose.models.Events || new mongoose.model("Events", EventSchema);
