import React from "react";
import ProductInterface from "@/interfaces/product-interface";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard: React.FC<ProductInterface> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <>
      <div className="flex flex-col justify-between border py-6 px-4">
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
            <span><FiShoppingCart /></span> Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
