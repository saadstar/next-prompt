const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PromptSchema = new Schema(
  {
     creator: {
      type: Schema.Types.ObjectId,
      ref:'User',
      required:true
      },  
    prompt: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


 module.exports = mongoose.model("Prompt", PromptSchema);