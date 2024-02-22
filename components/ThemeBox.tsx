
"use client"
import React from "react";
import { CssVarsProvider, CssBaseline, Stack, Divider, extendTheme } from "@mui/joy";
import ModeSwitcher from "./ModeToggle";
import DrawerMenu from "./Menu/DrawerMenu";

type ThemeBox = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties
};

const customTheme = extendTheme({
    fontFamily: {
      body: '"Outfit" !important',
      fallback: "cursive",
    }
})


export default function ThemeBox({ children, className, style }: ThemeBox) {
  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange theme={customTheme}>
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
      <Divider />
      <div className={className} style={style}>{children}</div>
    </CssVarsProvider>
  );
}
