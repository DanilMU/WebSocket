import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";

const socket = io.connect("http://localhost:5000");

const Chat = () => {
  const { search } = useLocation();
  const [params, setParams] = useState(null);

  useEffect(() => {
    const serachParams = Object.fromEntries(new URLSearchParams(search));
    setParams(serachParams);
    socket.emit("join", serachParams);
  }, [search]);

  useEffect(() => {
    socket.on("message", ({ data }) => {
      console.log(data);
    });
  }, []);

  return <div>Chat</div>;
};

export default Chat;
