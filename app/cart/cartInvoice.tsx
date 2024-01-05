import React from "react";
interface Props {
  subtotal: string;
  total: string;
}

const CartInvoice: React.FC<Props> = ({ subtotal, total }) => {
  return (
    <div className="justify-between mt-5">
      <div className="text-right">
        <h4 className="text-right mb-3">
          Subtotal : <span>$ {total}</span>
        </h4>
        <hr />
        <div className="mt-3">
          <h4 className="text-right mb-3">
            Total : <span>$ {total}</span>
          </h4>
          <a className="text-white px-3 py-1 rounded bg-purple-600" href="#">
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartInvoice;
