import React from "react";
interface Props {
  total: any;
}

const CartInvoice: React.FC<Props> = ({ total }) => {
  return (
    <div className="justify-between mt-5">
      <div className="text-right">
        <hr />
        <h4 className="text-right text-lg font-medium mb-3">
          Total : <span>$ {total}</span>
        </h4>
        <a className="text-white px-3 py-1 rounded bg-purple-600" href="#">
          Checkout
        </a>
      </div>
    </div>
  );
};

export default CartInvoice;
