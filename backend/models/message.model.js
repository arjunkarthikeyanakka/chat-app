import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // senderId will be from the userSchema
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // senderId will be from the userSchema
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  //   createdAt, updatedAt -> better to track and have info about messages.
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
