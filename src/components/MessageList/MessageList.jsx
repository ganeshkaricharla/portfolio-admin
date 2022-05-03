import React from "react";
import "./MessageList.css";
import SingleMessage from "../SingleMessage/SingleMessage";

function MessageList() {
  return (
    <div className="message-list-container">
      <SingleMessage />
      <SingleMessage />
    </div>
  );
}

export default MessageList;
