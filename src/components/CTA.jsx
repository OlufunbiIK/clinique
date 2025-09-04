import React from "react";
import left from "../assets/images/left.svg";
import right from "../assets/images/right.svg";

export default function CTA() {
  return (
    <div>
      <div className="flex">
        <div>
          <img src={left} alt="" className="" />
        </div>
        <div className="-ml-2">
          <img src={right} alt="" className="" />
        </div>
      </div>
    </div>
  );
}
