import React from "react";
import PlaceholderImage from "../../PlaceholderImage";
import {
  lightFormat,
  intervalToDuration,
  isToday,
  isYesterday,
  sub,
  startOfToday,
  subDays,
  getDay,
} from "date-fns";

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

  const displayDate = formatDisplayDate(lastUpdatedDate);

  return (
    <div className="flex grow justify-between p-2 hover:bg-mid-grey text-dead-white">
      <div className="grow-0">
        <PlaceholderImage className="mx-2 my-auto" />
      </div>
      <div className="flex flex-col grow justify-between">
        <div className="flex flex-row justify-between">
          <div className="text-lg text-ellipsis">{title}</div>
          <div className="text-xs my-auto">{displayDate}</div>
        </div>
        <div className="text-sm text-secondary text-ellipsis">
          {previewContent}
        </div>
      </div>
    </div>
  );
};

function formatDisplayDate(lastUpdatedDate: Date) {
  if (isToday(lastUpdatedDate)) {
    return lightFormat(lastUpdatedDate, "HH:mm");
  }
  if (isYesterday(lastUpdatedDate)) {
    return "Yesterday";
  }

  const duration: Duration = intervalToDuration({
    start: lastUpdatedDate,
    end: startOfToday(),
  });

  // is last 7 days?
  if (duration.days! <= 7) {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][getDay(lastUpdatedDate)];
  }

  // fallback to returning date
  return lightFormat(lastUpdatedDate, "M/dd/yyyy");
}

export default ChatItem;
