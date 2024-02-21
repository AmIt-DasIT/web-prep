"use client";

import { useColorScheme, Button, Box } from "@mui/joy";
import React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box
      sx={{cursor: 'pointer'}}
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
      }}
    >
      {mode === "dark" ? <LightModeIcon color="warning" /> : <DarkModeIcon />}
    </Box>
  );
}
