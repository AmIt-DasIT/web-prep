"use client";
import React, { useMemo } from "react";
import { CssVarsProvider, CssBaseline, extendTheme, getInitColorSchemeScript } from "@mui/joy";
import Header from "@/components/Header/Header";

type ThemeBox = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const customTheme = extendTheme({
  fontFamily: {
    body: '"Outfit" !important',
    fallback: "cursive",
  },
});

export default function ThemeBox({ children, className, style }: ThemeBox) {

  return (
    <CssVarsProvider
      defaultMode="dark"
      disableTransitionOnChange
      theme={customTheme}
    >
      {getInitColorSchemeScript()}
      <CssBaseline />
      <div className="sticky top-0 right-0 overflow-hidden z-50 backdrop-blur">
        <Header />
      </div>
      <div className={className} style={style}>
        {children}
      </div>
    </CssVarsProvider>
  );
}
