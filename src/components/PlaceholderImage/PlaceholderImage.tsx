import React from "react";
import NextImage from "next/image";
import clsx from "clsx";

// Maybe this is just a quick and dirty image placeholder

function PlaceholderImage({ className }) {
  return (
    <img
      className={clsx("rounded-full", className)}
      width="36px"
      height="36px"
      src="https://image-placeholder.com/images/actual-size/75x75.png"
    />
  );
}

export default PlaceholderImage;
