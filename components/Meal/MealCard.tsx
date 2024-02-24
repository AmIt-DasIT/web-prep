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
      className="grid grid-cols-1 sm:grid-cols-5 rounded-lg border border-gray-600 relative p-2 gap-2"
    >
      {products.slice(0, showData).map((data) => (
        <Link href={`meals/${data.idMeal}`} key={data.idMeal}>
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
