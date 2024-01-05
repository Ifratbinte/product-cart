"use client";
import React from "react";
import {
  decrementQuantity,
  incrementQuantity,
  remove,
} from "@/store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes, FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div className="text-2xl font-medium text-center my-6">Cart page</div>
      <div className="w-2/3 mx-auto">
        {cartItems.map((item: any) => (
          <div className="flex items-center justify-between mb-6 py-3 px-6 rounded bg-slate-50">
            <img src={item.image} alt="img" className="min-h-16 max-h-16" />
            <h5 className="w-1/3">{item.title}</h5>
            <h5 className="w-1/6 font-medium flex items-center gap-2">
              ${item.price} <FaTimes className="text-xs" /> {cartItems.length}
            </h5>
            <div className="w-1/4 flex gap-4">
              <button
                className="text-lg p-1 bg-slate-100 h-6 w-6 flex items-center justify-center border border-slate-200 cursor-pointer"
                onClick={() => dispatch(incrementQuantity())}
              >
                +
              </button>
              <button
                className="text-lg p-1 bg-slate-100 h-6 w-6 flex items-center justify-center border border-slate-200 cursor-pointer"
                onClick={() => dispatch(decrementQuantity())}
              >
                -
              </button>
            </div>
            <button
              className="text-red-500 hover:bg-red-100 p-2 rounded "
              onClick={() => handleRemove(item.id)}
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
