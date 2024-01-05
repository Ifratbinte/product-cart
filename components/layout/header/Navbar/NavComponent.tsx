import { useSelector } from "react-redux";
import navItems, { NavInterface } from "./MenuItems";
import NavItem from "./NavItem";

const Nav = () => {
  // const ProductItem:any = useSelector((state:any)=> {state.cart})

  const { total_quantity } = useSelector((state: any) => state.cart);

  return (
    <div className="flex items-center">
      <ul className="menu flex xl:items-center items-start xl:flex-row flex-col xl:ml-10">
        {navItems &&
          navItems.map((item: NavInterface, index: number) => {
            return <NavItem key={index} title={item.title} path={item.path} />;
          })}
      </ul>
      <div className="text-lg font-medium ml-4">Items : {total_quantity}</div>
    </div>
  );
};

export default Nav;
