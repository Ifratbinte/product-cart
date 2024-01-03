import navItems, { NavInterface } from "./MenuItems";
import NavItem from "./NavItem";

const Nav = () => {
  console.log({ navItems });

  return (
    <>
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
    </>
  );
};

export default Nav;
