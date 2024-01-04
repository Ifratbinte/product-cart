"use client";
import ProductCard from "@/components/card";
import ProductInterface from "@/interfaces/product-interface";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!baseUrl) {
          console.error("Base URL is not defined");
          return;
        }
        const response = await axios.get<ProductInterface[]>(`${baseUrl}`);
        console.log("res", response);
        const fetchedData = response.data;
        setProduct(fetchedData);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:");
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  console.log("🚀 ~ file: page.tsx:8 ~ Products ~ dataArray:", product);
  return (
    <main className="min-h-screen">
      <div className="container mx-auto my-10">
        <div className="text-2xl mb-4">Products -</div>
        <div className="grid grid-cols-4 gap-8">
          {product.map((item: ProductInterface, i: number) => (
            <ProductCard
              key={i}
              image={item.image}
              title={item.title}
              description={
                item.description.length > 200
                  ? `${item.description.substring(0, 200)}...`
                  : item.description
              }
              price={item.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
