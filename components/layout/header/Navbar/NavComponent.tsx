import { useSelector } from "react-redux";
import navItems, { NavInterface } from "./MenuItems";
import NavItem from "./NavItem";
import { SlHandbag } from "react-icons/sl";

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
      <div className="relative cursor-pointer ml-3">
        <SlHandbag className="font-medium text-xl hover:text-purple-600"/>
        <div className="text-xs font-medium absolute -top-3 -right-2 bg-purple-600 text-white h-4 w-4 flex items-center justify-center rounded-full">{total_quantity}</div>
      </div>

      
    </div>
  );
};

export default Nav;
