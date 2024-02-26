"use client";

import { keyframes } from "@emotion/react";
import { Button, Snackbar, Typography } from "@mui/joy";
import React from "react";

const inAnimation = keyframes`
0% {
  transform: scale(0);
  opacity: 0;
}
100% {
  transform: scale(1);
  opacity: 1;
}
`;

const outAnimation = keyframes`
0% {
  transform: scale(1);
  opacity: 1;
}
100% {
  transform: scale(0);
  opacity: 0;
}
`;

export default function Cookies() {
  if (typeof document === "undefined") return;
  const cookie_popup = document.getElementById("cookie-popup");
  const accept_cookies = document.getElementById("accept-cookies");

  // Check if the user has accepted cookies before
  if (!getCookie("cookies_accepted") && cookie_popup !== null) {
    cookie_popup.style.display = "block";
  }

  // Function to set a cookie with a given name, value, and expiration
  function setCookie(name: string, value: string, days: number) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to get the value of a cookie by name
  function getCookie(name: string) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) == 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }

  // Event listener for accepting cookies
  if (cookie_popup !== null && accept_cookies !== null) {
    accept_cookies.addEventListener("click", function () {
      setCookie("cookies_accepted", "true", 365); // Set cookie for 1 year
      cookie_popup.style.display = "none"; // Hide popup after accepting
    });
  }

  const [open, setOpen] = React.useState(true);

  const animationDuration = 600;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      autoHideDuration={4000}
      animationDuration={animationDuration}
      sx={{
        ...(open && {
          animation: `${inAnimation} ${animationDuration}ms forwards`,
        }),
        ...(!open && {
          animation: `${outAnimation} ${animationDuration}ms forwards`,
        }),
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontFamily: "inherit",
      }}
    >
      <Typography sx={{ fontFamily: "inherit" }} component={"div"}>
        This website uses cookies to ensure you get the best experience on our
        website.
      </Typography>
      <Button
        variant="outlined"
        color="success"
        onClick={() => handleClose()}
        sx={{ fontFamily: "inherit" }}
      >
        Accept
      </Button>
    </Snackbar>
  );
}
