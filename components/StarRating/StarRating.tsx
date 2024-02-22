"use client";

import { Star } from "@mui/icons-material";
import { Box } from "@mui/joy";
import React, { useState } from "react";

export default function StarRating() {
  const [value, setValue] = useState(-1);
  return (
    <div className="flex justify-center items-center h-[92vh]">
      <Box sx={{ display: "flex", gap: 0.5 }}>
        {Array(5)
          .fill(5)
          .map((data, index) => (
            <Star
              color={index <= value ? "warning" : "action"}
              key={index}
              className="cursor-pointer"
              onClick={() => setValue(index)}
            />
          ))}
      </Box>
    </div>
  );
}
