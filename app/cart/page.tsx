"use client";
import {
  decrementQuantity,
  incrementQuantity,
  remove,
} from "@/store/CartSlice";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import CartInvoice from "./cartInvoice";

const Cart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.cart);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div className="text-2xl font-medium text-center my-6">Cart page</div>
      <div className="w-2/3 mx-auto">
        {data.map((item: any, i: number) => (
          <div
            className="flex items-center justify-between mb-6 py-3 px-6 rounded bg-slate-50"
            key={i}
          >
            <img src={item.image} alt="img" className="min-h-16 max-h-16" />
            <h5 className="w-1/3">{item.title}</h5>
            <h5 className="w-1/6 font-medium flex items-center gap-2">
              ${item.price}
            </h5>
            <div className="w-1/4 flex gap-4">
              <button
                className="text-lg p-1 bg-slate-100 h-6 w-6 flex items-center justify-center border border-slate-200 cursor-pointer"
                onClick={() => dispatch(incrementQuantity(item.id))}
              >
                +
              </button>
              <span>{item.quantity}</span>
              <button
                className="text-lg p-1 bg-slate-100 h-6 w-6 flex items-center justify-center border border-slate-200 cursor-pointer"
                onClick={() => dispatch(decrementQuantity(item.id))}
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
        <CartInvoice subtotal="" total="" />
      </div>
    </div>
  );
};

export default Cart;
