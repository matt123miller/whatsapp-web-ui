import React, { ChildContextProvider } from "react";
import NextImage from "next/image";
import clsx, { ClassValue } from "clsx";

type Props = {
  className?: ClassValue;
};

const PlaceholderImage: React.FC<Props> = ({ className }: Props) => {
  return (
    <img
      className={clsx("rounded-full", className)}
      width="36px"
      height="36px"
      src="https://image-placeholder.com/images/actual-size/75x75.png"
    />
  );
};

export default PlaceholderImage;
