import {
  Box,
  Card,
  CardCover,
  CardContent,
  Typography,
  Button,
} from "@mui/joy";
import Link from "next/link";
import React, { useState } from "react";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";

type MealCardType = {
  products: any[];
};

export default function MealCard({ products }: MealCardType) {
  const [showData, setShowData] = useState(10);
  return (
    <Box
      component="ul"
      sx={{
        display: "grid",
        gap: 2,
        p: 2,
        m: 0,
        gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
        border: "1px solid #444",
        position: "relative",
      }}
    >
      {products.slice(0, showData).map((data) => (
        <Link href={`meals/${data.idMeal}`}>
          <Card
            component="li"
            sx={{ minWidth: 300, flexGrow: 1 }}
            key={data.idMeal}
          >
            <CardCover>
              <img src={data.strMealThumb} loading="lazy" alt="" />
            </CardCover>
            <CardContent>
              <Typography
                level="body-lg"
                fontWeight="lg"
                textColor="#fff"
                mt={{ xs: 12, sm: 18 }}
              >
                {data.strMeal}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}

      <Button
        sx={{
          fontFamily: "inherit",
          position: "absolute",
          right: 13,
          bottom: 13,
          zIndex: 1000,
          color: "#000",
        }}
        size="sm"
        endDecorator={<KeyboardDoubleArrowRightRoundedIcon />}
        variant="plain"
        onClick={() =>
          setShowData((data) =>
            products?.length !== data ? products?.length : 10,
          )
        }
      >
        {products?.length !== showData ? "Show More" : "Hide More"}
      </Button>
    </Box>
  );
}
