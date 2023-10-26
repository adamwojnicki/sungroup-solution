import React from "react";

const CarouselButton = ({
  className,
  direction,
}: {
  className: string;
  direction: "next" | "prev";
}) => {
  return (
    <button className={className}>
      {direction === "next" ? "next" : "prev"}
    </button>
  );
};

export default CarouselButton;
