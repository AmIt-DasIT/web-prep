import DrawerMenu from "@/app/drawermenu";
import { Stack, Divider, Typography } from "@mui/joy";
import React from "react";
import ModeSwitcher from "../ModeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        p={2}
        px={4}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <DrawerMenu />
        <Link className="text-3xl font-semibold hidden md:flex" href={"/"}>Web-Prep</Link>
        <ModeSwitcher />
      </Stack>
      <Divider />
    </>
  );
}
