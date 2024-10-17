import mongoose from "mongoose";

const ProfileUserSchema = new mongoose.Schema({
  userId: String,
  userType: String,
  email: String,
  teacher: {
    name: String,
    department: String,
  },
  student: {
    name: String,
    branch: String,
    location: String,
    degree: String,
  },
  organizer: {
    name: String,
    branch: String,
    location: String,
    degree: String,
  },
});

mongoose.models = {};

const ProfileUser = mongoose.model("ProfileUser", ProfileUserSchema);

export default ProfileUser;
