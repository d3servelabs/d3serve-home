import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const SubscriberSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: uuidv4, // Automatically generates a UUID for each document
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Subscriber ||
  mongoose.model("Subscriber", SubscriberSchema);
