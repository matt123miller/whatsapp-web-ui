import React from "react";
import c, { ClassValue } from "clsx";

export type WideContainerProps = {
  children?: React.ReactNode;
  className?: ClassValue;
};

const WideContainer: React.FC<WideContainerProps> = ({
  children,
  className,
}) => {
  const classes = c(className, "flex h-14 p-2 bg-mid-grey");
  return <div className={classes}>{children}</div>;
};

export default WideContainer;
