import mongoose from "mongoose";
async function DatabaseConn() {
  const Mongo_DB = process.env.DATABASE_LINK;

  mongoose
    .connect(
      "mongodb+srv://ugalekiran29:o98nm12JL1i7TyoI@cluster0.pniravn.mongodb.net/Event_Manegement"
    )
    .then(() => {
      console.log("connected");
    })
    .catch(() => {
      console.log("disconnected");
    });
}

export default DatabaseConn;
