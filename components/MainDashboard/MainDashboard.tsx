"use client";

import { Search } from "@mui/icons-material";
import { Stack, Card, Input, Box } from "@mui/joy";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import path from "../../data/path.json";

export default function MainDashboard() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log(location.pathname);
    const getTitle =
      location.pathname === "/" ? "Web-Prep" : localStorage.getItem("title");
    if (!getTitle) return;
    document.title = getTitle;
  }, [title]);

  const [formData, setFormData] = useState({ searchData: "" });

  const searchData = useMemo(() => {
    return path.data.filter((data) =>
      data.name.toLowerCase().includes(formData.searchData.toLowerCase()),
    );
  }, [formData]);

  useEffect(() => {
    typeof window !== "undefined" && window.location.pathname === "/" && localStorage.setItem("title", "");
  }, [])

  return (
    <div className="flex items-center h-[92vh] flex-col">
      <Box display={{ sm: "flex", md: "none" }} fontSize={30} fontWeight={600}>Web-Prep</Box>
      <Input
        size="lg"
        placeholder="Search"
        variant="plain"
        endDecorator={<Search />}
        slotProps={{
          input: {
            "aria-label": "Search anything",
          },
        }}
        value={formData.searchData}
        onChange={(e) => setFormData({ searchData: e.target.value })}
        sx={{
          m: 3,
          borderRadius: 0,
          borderBottom: "2px solid",
          borderColor: "neutral.outlinedBorder",
          "&:hover": {
            borderColor: "neutral.outlinedHoverBorder",
          },
          "&::before": {
            border: "1px solid var(--Input-focusedHighlight)",
            transform: "scaleX(0)",
            left: 0,
            right: 0,
            bottom: "-2px",
            top: "unset",
            transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
            borderRadius: 0,
          },
          "&:focus-within::before": {
            transform: "scaleX(1)",
          },
        }}
      />
      <Stack
        direction={{ sm: "column", md: "row" }}
        sx={{ flexWrap: "wrap", gap: 2, px: 1, pt: 4 }}
      >
        {searchData.map((data) => (
          <Link href={data.path} className="flex-grow" key={data.id} onClick={() => {
            if (typeof window !== "undefined") {
              localStorage.setItem("title", data.name);
              setTitle(data.name);
            }
          }}>
            <Card
              
              variant="soft"
              sx={{
                minWidth: 340,
                textAlign: "center",
                cursor: "pointer",
              }}
              
            >
              {data.name}
            </Card>
          </Link>
        ))}
      </Stack>
    </div>
  );
}
