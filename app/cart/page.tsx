"use client";
import React from "react";
import { remove } from "@/store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

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
          <div className="flex items-center justify-between mb-6 p-3 rounded bg-slate-50">
            <img src={item.image} alt="img" className="min-h-16 max-h-16" />
            <h5 className="w-1/4">{item.title}</h5>
            <h5 className="w-1/4">{item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
