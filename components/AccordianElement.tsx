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
    <div className="bg-amber-100 text-amber-950 p-3 rounded w-[330px]">
      <div
        onClick={() =>
          enable
            ? setShow(!show)
            : setId((id) => (id === data.id ? 0 : data.id))
        }
        className="flex justify-between cursor-pointer"
      >
        <div className="text-lg font-medium">{data.title}</div>
        <div className="text-xl">{toggleCondition ? "-" : "+"}</div>
      </div>
      {toggleCondition && (
        <div className="text-[#333] transition duration-750">
          {data.description}
        </div>
      )}
    </div>
  );
}
