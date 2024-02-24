"use client";

import { Box } from "@mui/joy";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [productDetails, setProductDetails] = useState<any>({});
  const fetchData = async () => {
    const posts = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.slug}`,
    ).then((res) => res.json());
    setProductDetails(posts.meals[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   <div>My Post: {JSON.stringify(productDetails, null, 2)}</div>;
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          background: `url(${productDetails.strMealThumb})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          borderRadius: 20,
          mt: 3,
        }}
        width={700}
        height={300}
      ></Box>
    </Box>
  );
}
