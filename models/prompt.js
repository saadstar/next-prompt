import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  prompt: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true
  },
  creator: {
      type: Schema.Types.ObjectId,
      ref:'user',
      },   
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;
