import { Box, Card, CardCover, CardContent, Typography } from "@mui/joy";
import React from "react";

type DataCardType = {
  data: any;
};

export default function DataCard({ data }: DataCardType) {
  return (
    <Card component="li" sx={{ minWidth: 400, flexGrow: 1, minHeight: 250 }}>
      <CardCover>
        <img
          src={data.thumbnail}
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardContent>
        <Typography
          level="body-lg"
          fontWeight="lg"
          textColor="warning.700"
          mt={{ xs: 12, sm: 23 }}
        >
          {data.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
