import React from "react";
import img from "./assets/this.jpg";
export default function Error() {
  return (
    <div className="relative w-screen h-screen object-cover bg-[#69C8F4] flex justify-center items-center">
      <a href="/">
      <button className="absolute top-6 left-2 cursor-pointer bg-white px-3 py-2 rounded-md text-black tracking-wider shadow-xl animate-pulse rotate-90 hover:animate-none">
        <svg
          className="w-5 h-5"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
      </a>
      <img src={img} className="object-cover max-sm:scale-150" alt="" />
    </div>
  );
}
