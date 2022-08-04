import clsx, { ClassValue } from "clsx";
import React, { useState } from "react";
import {
  SortAscendingIcon,
  SortDescendingIcon,
  SearchIcon,
} from "@heroicons/react/solid";
export type Props = {
  children?: React.ReactNode;
  className?: ClassValue;
};

const SearchBar: React.FC<Props> = (props: Props) => {
  const [ascending, setAscending] = useState(false);

  return (
    <div className="px-4 py-2 flex flex-row grow">
      {/* TODO: Add functionality later */}
      <div className="flex grow bg-default rounded-md p-1">
        <span className="grow-0 pr-4">
          {/* icon that changes based on state */}
          <SearchIcon
            className=" text-lg text-gray-400 hover:text-white"
            width="15px"
            height="15px"
          />
        </span>
        <input
          className="bg-default grow-1 py-2 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-grey-400"
          type="text"
          name="search-query"
          id="SearchQuery"
          placeholder="Search or start new chat"
        />
      </div>
      <span className="grow-0 pl-2">
        {ascending ? (
          <SortDescendingIcon
            onClick={() => setAscending(!ascending)}
            className=" text-lg text-gray-400 hover:text-white"
            width="24px"
            height="24px"
          />
        ) : (
          <SortAscendingIcon
            onClick={() => setAscending(!ascending)}
            className="text-lg text-gray-400 hover:text-white"
            width="24px"
            height="24px"
          />
        )}
      </span>
    </div>
  );
};

export default SearchBar;
