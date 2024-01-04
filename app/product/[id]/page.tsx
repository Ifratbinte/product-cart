'use client'
import ProductInterface from "@/interfaces/product-interface";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import type { NextApiRequest, NextApiResponse } from 'next'

const ProductDetails = (req: NextApiRequest) => {
//   const router = useRouter();
  const { pid } = req.query;
  const [product, setProduct] = useState(null);
//   useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (pid) {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/${pid}`
          );
          setProduct(response.data);
          console.log("details response", response);
          
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [pid]);
  return (
    <>
      {/* <div className="flex flex-col justify-between border py-6 px-4">
        <div className="p-2">
          <img
            src={image}
            alt={title}
            className="rounded-lg mx-auto min-h-32 max-h-32"
          />
          <img src="" alt="" />
          <div className="mt-4">
            <div className="uppercase text-sm text-indigo-600 font-bold">
              {title}
            </div>

            <p className="mt-2 text-gray-900">{description}</p>
          </div>
        </div>

        <div className="flex justify-between items-center my-4">
          <div className="text-base font-medium">$ {price}</div>
          <button className="flex items-center gap-2 px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded font-medium">
            <span>
              <FiShoppingCart />
            </span>{" "}
            Add to cart
          </button>
        </div>
      </div> */}
    </>
  );
};

export default ProductDetails;
