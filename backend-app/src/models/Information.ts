import * as mongoose from "mongoose";

const informationSchema = new mongoose.Schema({
    version: String,
    description: String
});

export default mongoose.model("informations", informationSchema,);
