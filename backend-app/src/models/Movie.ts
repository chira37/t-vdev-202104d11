import * as mongoose from "mongoose";

const moveiSchema = new mongoose.Schema({
    id: String,
    name: String,
    year: Number,
    description: String,
});

export default mongoose.model("movies", moveiSchema);
