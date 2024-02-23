import * as React from "react";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import { useEffect } from "react";

export default function LoadingProgress() {
  const [scroll, setScroll] = React.useState(0);
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      //   console.log(
      //     document.body.scrollHeight,
      //     document.documentElement.scrollTop,
      //     document.documentElement.scrollHeight,
      //     document.documentElement.clientHeight,
      //   );
      //   setScroll({
      //     scrollHeight:
      //       document.body.scrollHeight || document.documentElement.scrollTop,
      //     pageHeight:
      //       document.documentElement.scrollHeight -
      //       document.documentElement.clientHeight,
      //   });

      setScroll(
        Number(
          (
            (Number(document.documentElement.scrollTop.toFixed(2)) /
              Number(
                (
                  document.documentElement.scrollHeight -
                  document.documentElement.clientHeight
                ).toFixed(2),
              )) *
            100
          ).toFixed(2),
        ),
      );
    });

    document.removeEventListener("scroll", () => {});
  }, []);

  return (
    <LinearProgress
      determinate
      variant="plain"
      color="success"
      size="sm"
      thickness={6}
      value={scroll!}
      sx={{
        "--LinearProgress-radius": "20px",
        "--LinearProgress-thickness": "6px",
      }}
    >
    </LinearProgress>
  );
}
