/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaSearch, FaEllipsisV } from "react-icons/fa";
function ChatWindowHeader() {
  const chatMembers = [
    "Matt",
    "Merolyn",
    "Thomas",
    "Snehil",
    "Latt",
    "oparkes",
  ];

  return (
    <div className="flex grow justify-between">
      <div className="grow-0 my-auto">
        <img
          src="https://via.placeholder.com/64"
          alt=""
          srcSet=""
          width="32px"
          height="32px"
          className="align-middle rounded-full border border-white"
        />
      </div>
      <div className="ml-4 my-auto flex flex-col grow">
        <span className="text-white font-bold">Chat Title</span>
        <span className="text-gray-400">{chatMembers.join(", ")}</span>
      </div>

      <div className="my-auto flex flex-row grow-0">
        <FaSearch className="text-lg text-gray-400 hover:text-white mr-2" />
        <FaEllipsisV className="text-lg text-gray-400 hover:text-white" />
      </div>
    </div>
  );
}

export default ChatWindowHeader;
