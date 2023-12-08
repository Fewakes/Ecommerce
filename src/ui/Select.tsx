import React from "react";

export default function Select() {
  return (
    <>
      <h2 className="font-bold text-white">Collection</h2>
      <div className="relative">
        <select className="appearance-none border-none bg-transparent pr-8 text-center text-white outline-none">
          <option>All Selected</option>
          <option>Oranges</option>
          <option>Lemons</option>
          <option>Strawberry</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      <img
        src="product-1.png"
        alt="A photo of our shop"
        className="h-[7rem] w-[7rem] rounded-md "
      />
    </>
  );
}