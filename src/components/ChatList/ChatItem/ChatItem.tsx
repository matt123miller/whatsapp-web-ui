import React from "react";
import PlaceholderImage from "../../PlaceholderImage";

type Props = {
  chat: {
    title: string;
    imageSrc: string;
    lastUpdatedDate: Date;
    previewContent: string;
  };
};

const ChatItem: React.FC<Props> = (props: Props) => {
  const { title, imageSrc, lastUpdatedDate, previewContent } = props.chat;

  return (
    <div className="flex grow justify-between text-white">
      <div className="grow-0">
        <PlaceholderImage className="mx-2" />
      </div>
      <div className="flex flex-col grow justify-between">
        <div>
          <span className="text-lg font-bold">{title}</span>
          <span>
            {lastUpdatedDate.toLocaleString("en-GB", { timeZone: "UTC" })}
          </span>
        </div>
        <div>{previewContent}</div>
      </div>
    </div>
  );
};

export default ChatItem;
