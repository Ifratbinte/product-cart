export interface NavInterface {
  id: number;
  title: string;
  path: string;
}

const NavItems: NavInterface[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "#",
  },
];
export default NavItems;
