import React from "react";
import c, { ClassValue } from "clsx";

export type WideContainerProps = {
  children?: React.ReactNode;
  className?: ClassValue;
  backgroundColour?: string;
};

const WideContainer: React.FC<WideContainerProps> = ({
  children,
  className,
  backgroundColour = "bg-mid-grey",
}) => {
  const classes = c(className, "flex h-14 p-2", backgroundColour);
  return <div className={classes}>{children}</div>;
};

export default WideContainer;
