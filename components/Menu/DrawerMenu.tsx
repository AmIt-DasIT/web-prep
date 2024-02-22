"use client";

import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import path from "../../Data/path.json";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { HomeRounded } from "@mui/icons-material";

export default function DrawerMenu() {
  const [open, setOpen] = useState(false);
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

  return (
    <>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} size="sm">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            mt: 1,
            mr: 2,
            justifyContent: "space-between",
          }}
        >
          <Link
            href={"/"}
            className="flex items-center ml-5"
            onClick={() => setOpen(false)}
          >
            <HomeRounded sx={{ mb: 0.5 }} />
          </Link>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              component="label"
              htmlFor="close-icon"
              fontSize="sm"
              fontWeight="lg"
              sx={{ cursor: "pointer" }}
            >
              Close
            </Typography>
            <ModalClose id="close-icon" sx={{ position: "initial" }} />
          </Box>
        </Box>
        <Input
          size="sm"
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
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
            pl: 3,
          }}
        >
          {searchData.map((value) => (
            <Link
              key={value.id}
              href={value.path}
              onClick={() => {
                if (typeof window !== "undefined") {
                  localStorage.setItem("title", value.name);
                  setTitle(value.name);
                }
              }}
              className={`text-base py-2 pl-2 mr-5 font-medium ${typeof window !== "undefined" && localStorage.getItem("title") === value.name ? "font-[800] duration-150 text-lg" : ""}`}
            >
              {value.name}
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}
