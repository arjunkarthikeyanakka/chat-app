import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../store/useConversation";
import notificationSound from '../assets/sounds/notification.mp3';

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    // below is the cleanup function, which is called when the component unmounts.
    // this is highly necessary.
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
