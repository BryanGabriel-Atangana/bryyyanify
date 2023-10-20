import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  description: { type: String, required: [true, "Description is required"] },
  tag: { type: String, required: [true, "Tag is required"] },
  //reviews
  //type : Int
  //default : 0
  //
  //
  //copies
  //type : Int
  //default : 0
  //
  //
  //
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
