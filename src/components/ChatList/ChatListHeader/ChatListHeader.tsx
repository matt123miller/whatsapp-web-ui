/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaCircle, FaEllipsisV, FaEnvelopeOpenText } from "react-icons/fa";
import PlaceholderImage from "../../PlaceholderImage";

function ChatListHeader() {
  return (
    <div className="flex grow justify-between">
      <div className="grow my-auto">
        <PlaceholderImage />
      </div>

      <div className="ml-4 my-auto flex flex-row grow-0">
        <FaCircle className="ml-2 text-lg text-gray-400 hover:text-white" />
        <FaEnvelopeOpenText className="ml-2 text-lg text-gray-400 hover:text-white" />
        <FaEllipsisV className="ml-2 text-lg text-gray-400 hover:text-white" />
      </div>
    </div>
  );
}

export default ChatListHeader;
