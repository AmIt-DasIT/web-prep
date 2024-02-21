import React from "react";
import { CssVarsProvider, CssBaseline, Stack } from "@mui/joy";
import ModeSwitcher from "./ModeToggle";
import DrawerMenu from "./Menu/DrawerMenu";

type ThemeBox = {
  children: React.ReactNode;
};

export default function ThemeBox({ children }: ThemeBox) {
  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <CssBaseline />
      <Stack
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        p={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <DrawerMenu />
        <ModeSwitcher />
      </Stack>
      {children}
    </CssVarsProvider>
  );
}
