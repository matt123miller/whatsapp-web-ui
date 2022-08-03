/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaCircle, FaEllipsisV, FaEnvelopeOpenText } from "react-icons/fa";

function ChatListHeader() {
  return (
    <div className="flex grow justify-between">
      <div className="grow my-auto">
        <img
          src="https://via.placeholder.com/64"
          alt=""
          srcSet=""
          width="32px"
          height="32px"
          className="align-middle rounded-full border border-white"
        />
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
