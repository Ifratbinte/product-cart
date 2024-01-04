import React from "react";
import Link from "next/link";

interface Props {
  children: JSX.Element;
  id: number;
}

const DynamicRoute: React.FC<Props> = ({ children, id }) => {
  return (
    <>
      <Link href={`/product/${id}`}>{children}</Link>
    </>
  );
};

export default DynamicRoute;
