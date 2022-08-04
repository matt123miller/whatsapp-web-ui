import clsx, { ClassValue } from "clsx";
import React from "react";

export type Props = {
  children?: React.ReactNode;
  className?: ClassValue;
};

const SearchBar: React.FC<Props> = (props: Props) => {
  return (
    <div className="px-4 py-2 flex flex-row">
      {/* TODO: Add functionality later */}
      <div className="flex bg-default rounded-md p-1">
        <span>
          {/* icon that changes based on state */}
          icon
        </span>
        <input
          className="bg-default border-none"
          type="text"
          name="search-query"
          id="SearchQuery"
          placeholder="Search or start new chat"
        />
      </div>
      <span>icon</span>
    </div>
  );
};

export default SearchBar;
