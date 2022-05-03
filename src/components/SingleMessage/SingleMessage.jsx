import React from "react";
import "./SingleMessage.css";

function SingleMessage() {
  return (
    <div className="single-message-container">
      <h1 className="single-message-name">
        Name <span className="single-message-email">(email)</span>
      </h1>
      <p className="single-message-message">Message</p>
    </div>
  );
}

export default SingleMessage;
