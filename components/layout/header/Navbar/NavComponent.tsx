import navItems, { NavInterface } from "./MenuItems";
import NavItem from "./NavItem";

const Nav = () => {
  console.log({ navItems });

  return (
    <div className="flex items-center">
      <ul className="menu flex xl:items-center items-start xl:flex-row flex-col xl:ml-10">
        {navItems &&
          navItems.map((item: NavInterface, index: number) => {
            return (
              <NavItem
                key={index}
                title={item.title}
                path={item.path}
              />
            );
          })}
      </ul>
      <div className="text-lg font-medium ml-4">Items : 0</div>
    </div>
  );
};

export default Nav;
