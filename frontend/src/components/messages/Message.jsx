import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const sendFromMe = message.senderId === authUser?._id;
  const chatClass = sendFromMe ? "chat-end" : "chat-start";
  const profilePic = sendFromMe
    ? authUser?.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = sendFromMe ? "bg-blue-500" : "";
  const messageSentAt = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "" 
  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Tailwind CSS chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className={`chat-footer opacity-50 text-s flex gap-1 items-center`}>
        {messageSentAt}
      </div>
    </div>
  );
};

export default Message;
