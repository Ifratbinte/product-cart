import ProductInterface from "@/interfaces/product-interface";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard: React.FC<ProductInterface> = ({
  image,
  title,
  description,
  price,
  handleClick,
}) => {
  return (
    <>
      <div className="flex flex-col justify-between border pt-6 px-4 min-h-[370px] max-h-[370px]">
        <div className="p-2">
          <img
            src={image}
            alt={title}
            className="rounded-lg mx-auto min-h-32 max-h-32"
          />
          <img src="" alt="" />
          <div className="mt-4">
            <div className="uppercase text-sm text-black font-bold">
              {title}
            </div>

            <p className="mt-2 text-sm text-gray-900">{description}</p>
          </div>
        </div>

        <div className="flex justify-between items-center my-4">
          <div className="text-base font-semibold">${price}</div>
          <button
            className="flex items-center gap-2 px-3 py-1 text-sm text-white bg-purple-500 hover:bg-purple-600 rounded font-medium"
            onClick={handleClick}
          >
            <span>
              <FiShoppingCart />
            </span>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
