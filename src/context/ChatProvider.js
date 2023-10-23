import React, { createContext, useContext, useState } from "react";
import io from "socket.io-client";

const socket = io.connect(process.env.REACT_APP_SERVER || window.location.host);

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [currentRoom, setCurrentRoom] = useState({
    id: 1,
    name: "OGTIC",
    src: "./logo-ogtic.svg",
    description:
      "Oficina Gubernamental de Tecnologías de la Información y Comunicación",
  });

  const value = {
    socket,
    userName,
    setUserName,
    setCurrentRoom,
    currentRoom,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
