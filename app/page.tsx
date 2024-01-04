"use client";
import DynamicRoute from "@/components/DynamicRoute";
import ProductCard from "@/components/card";
import ProductInterface from "@/interfaces/product-interface";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await axios.get<ProductInterface[]>(`${baseUrl}`);
      setProducts(res.data);
    };

    // Call the fetchData function
    fetchData();
  }, []);
  console.log("🚀 ~ file: page.tsx:8 ~ Products ~ dataArray:", products);
  return (
    <main className="min-h-screen">
      <div className="container mx-auto my-10">
        <div className="text-2xl mb-4">Products -</div>
        <div className="grid grid-cols-5 gap-6">
          {products.map((item: ProductInterface, i: number) => (
            <DynamicRoute id={item.id}>
              <ProductCard
                key={i}
                id={item.id}
                image={item.image}
                title={
                  item.title.length > 40
                    ? `${item.title.substring(0, 40)}...`
                    : item.title
                }
                description={
                  item.description.length > 100
                    ? `${item.description.substring(0, 100)}...`
                    : item.description
                }
                price={item.price}
              />
            </DynamicRoute>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
