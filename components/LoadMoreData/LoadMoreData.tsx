"use client";

import React, { useEffect, useState } from "react";
import loadmoredata from "../../Data/loadmoredata.json";
import { Box, Button, CircularProgress } from "@mui/joy";
import ThemeBox from "../ThemeBox";
import DataCard from "./DataCard";

type responseDataType = {
  id: number;
  title: string;
  thumbnail: string;
};

export default function LoadMoreData() {
  const [limit, setLimit] = useState(20);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<responseDataType[]>([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${loadmoredata.baseAPI}?limit=${limit}&skip=${count === 0 ? 0 : count * limit}`,
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((products) => [...products, ...result.products]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <ThemeBox>
      <Box
        component="ul"
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          p: 0,
          m: 5,
          justifyContent: "center",
        }}
      >
        {products?.length === 0 ? (
          <CircularProgress />
        ) : (
          products.map((data) => <DataCard data={data} key={data.id} />)
        )}
      </Box>
      {products?.length > 0 && (
        <Box
          sx={{ display: "flex", justifyContent: "center", mb: 3 }}
          onClick={() => setCount((count) => count + 1)}
        >
          <Button variant="outlined" loading={loading}>
            Load More
          </Button>
        </Box>
      )}
    </ThemeBox>
  );
}
