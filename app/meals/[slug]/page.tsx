"use client";

import { Error } from "@/components/Error/Error";
import { countries } from "@/data/country";
import { nationalities } from "@/data/countrywithnationality";
import { Box, Chip, Typography } from "@mui/joy";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [productDetails, setProductDetails] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const posts = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.slug}`,
      ).then((res) => res.json());
      setProductDetails(posts.meals[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
      px={{ sm: 10, md: 50 }}
      mx={2}
      mt={2}
      gap={3}
    >
      {!loading && Object.keys(productDetails)?.length > 0 ? (
        <>
          <Box
            sx={{
              background: `url(${productDetails.strMealThumb})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
              borderRadius: 20,
              width: "100%",
            }}
            height={300}
          ></Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="grid grid-flow-col gap-1">
              <Typography fontFamily={"inherit"} level="h2">
                {productDetails.strMeal}
              </Typography>
              <img
                loading="lazy"
                width={20}
                height={15}
                srcSet={`https://flagcdn.com/w40/${nationalities.filter((data) => data.label === productDetails.strArea)[0]?.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${nationalities.filter((data) => data.label === productDetails.strArea)[0]?.code.toLowerCase()}.png`}
                alt=""
                className="pt-1"
              />
            </div>
            <Chip
              color="success"
              size="sm"
              sx={{ height: 1, px: 1.5, py: 0.5 }}
            >
              {productDetails.strTags}
            </Chip>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Typography fontFamily={"inherit"} level="title-lg">
              Ingredients
            </Typography>
            <Box
              display={"flex"}
              gap={0.5}
              my={1}
              flexWrap={"wrap"}
              flexDirection={"row"}
            >
              {Array.from({ length: 20 }).map((value, index) => (
                <>
                  {productDetails[`strIngredient${index + 1}`]?.length !== 0 ? (
                    <Chip color="warning" size="lg" key={index}>
                      {productDetails[`strIngredient${index + 1}`]}
                    </Chip>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography fontFamily={"inherit"} level="title-lg">
              Descriptions
            </Typography>
            <Typography fontFamily={"inherit"}>
              {productDetails.strInstructions}
            </Typography>
          </Box>
        </>
      ) : (
        <Error
          loading={loading}
          emptyDataChecker={Object.keys(productDetails)?.length === 0}
          status={0}
        />
      )}
    </Box>
  );
}
