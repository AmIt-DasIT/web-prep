"use client";

import { Box, Button, Input, Stack } from "@mui/joy";
import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";
import { SearchRounded } from "@mui/icons-material";
import { Error } from "../Error/Error";

export default function MealContainer() {
  const [search, setSearch] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
      );
      const result = await response.json();
      console.log(result);
      if (result && result.meals && result.meals.length) {
        setProducts(result.meals);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <Box p={2}>
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent={"center"}
        spacing={2}
        mb={2}
      >
        <Input
          sx={{ height: 37, borderRadius: 30 }}
          className="w-[100%] sm:w-[50%]"
          startDecorator={<SearchRounded />}
          endDecorator={
            <Button
              sx={{ fontFamily: "inherit", borderRadius: 30 }}
              variant="solid"
              size="md"
            >
              Search
            </Button>
          }
          size="lg"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Stack>
      {products?.length > 0 ? (
        <MealCard products={products} />
      ) : (
        <Error
          loading={loading}
          emptyDataChecker={products?.length === 0}
          status={0}
        />
      )}
    </Box>
  );
}
