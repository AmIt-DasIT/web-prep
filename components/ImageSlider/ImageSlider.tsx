"use client";

import { AspectRatio, Box, Button } from "@mui/joy";
import React, { useState } from "react";
import imageslide from "../../data/imageslide.json";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function ImageSlider() {
  const [showId, setShowId] = useState(1);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "91vh",
      }}
    >
      {imageslide.data.map((data) =>
        showId === data.id ? (
          <div
            className="flex w-[90vw] h-[90vh] mx-20 justify-center items-center duration-700"
            key={data.id}
          >
            <Button
              variant="outlined"
              color="neutral"
              sx={{ height: "55px", borderRadius: "100%" }}
              onClick={() =>
                setShowId(showId > 1 ? data.id - 1 : imageslide.data.length)
              }
            >
              <ArrowLeft />
            </Button>
            <img
              src={data.imagePath}
              alt={""}
              loading="lazy"
              className="mx-32 w-[70vw] h-[80vh] rounded-3xl shadow-2xl"
            />
            <Button
              variant="outlined"
              color="neutral"
              sx={{ height: "55px", borderRadius: "100%" }}
              onClick={() =>
                setShowId(showId < imageslide.data.length ? data.id + 1 : 1)
              }
            >
              <ArrowRight />
            </Button>
          </div>
        ) : (
          <div key={data.id}></div>
        ),
      )}
    </Box>
  );
}
