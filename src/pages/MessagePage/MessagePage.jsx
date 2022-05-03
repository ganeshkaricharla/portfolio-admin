import React from "react";
import MessageList from "../../components/MessageList/MessageList";

function MessagePage() {
  return (
    <div className="messagepage-container">
      <h1 className="messagepage-title">Messages</h1>
      <MessageList />
    </div>
  );
}

export default MessagePage;
