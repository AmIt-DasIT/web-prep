"use client";

import React, { useState } from "react";
import accordian from "../../data/accordian.json";
import AccordianElement from "./AccordianElement";

export default function Accordian() {
  const [enable, setEnable] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div className="flex w-full justify-center items-center flex-col gap-3 min-h-[92.7vh]">
      <div
        onClick={() => {
          setEnable(!enable);
          setId(0);
        }}
        className="cursor-pointer border p-2 rounded border-amber-900 text-amber-700 font-medium w-[150px] text-center"
      >
        {enable ? "Disable" : "Enable"} Multiple
      </div>
      {accordian.data.map((value) => (
        <AccordianElement
          data={value}
          enable={enable}
          setId={setId}
          id={id}
          key={value.id}
        />
      ))}
    </div>
  );
}
