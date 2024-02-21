import React, { useCallback, useState } from "react";

type AccordianElementType = {
  data: {
    id: number;
    title: string;
    description: string;
  };
  enable: boolean;
  setId: React.Dispatch<React.SetStateAction<number>>;
  id: number;
};

export default function AccordianElement({
  data,
  enable,
  setId,
  id,
}: AccordianElementType) {
  const [show, setShow] = useState(false);

  const toggleCondition = enable ? show : id === data.id;

  return (
    <div className="bg-amber-100 text-amber-800 p-3 rounded-md w-[330px] transition-shadow duration-750">
      <div
        onClick={() =>
          enable
            ? setShow(!show)
            : setId((id) => (id === data.id ? 0 : data.id))
        }
        className="flex justify-between cursor-pointer"
      >
        <div className="text-lg">{data.title}</div>
        <div className="text-2xl">{toggleCondition ? "-" : "+"}</div>
      </div>
      {toggleCondition && (
        <div className="text-[#333]">
          {data.description}
        </div>
      )}
    </div>
  );
}
