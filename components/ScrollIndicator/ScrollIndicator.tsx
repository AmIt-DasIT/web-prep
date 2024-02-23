"use client";

import React, { useEffect, useState } from "react";
import loadmoredata from "../../data/loadmoredata.json";
import LoadingProgress from "./LoadingProgress";

type responseDataType = {
  id: number;
  title: string;
  thumbnail: string;
};

export default function ScrollIndicator() {
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
    <div className="relative">
      <div className="sticky top-0 w-[99.7%]">
      <LoadingProgress />
      </div>
      <div className="px-10 my-4">
      {products.map((data, index) => (
        <div className="h-14" key={index}>
          {data.title}
        </div>
      ))}
      </div>
    </div>
  );
}
