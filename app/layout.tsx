// import AppProvider from "@/store/Prvider";
import AppProvider from "./provider";
import "./globals.css";
import MasterLayout from "@/containers/MasterLayout";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <MasterLayout>{children}</MasterLayout>
        </AppProvider>
      </body>
    </html>
  );
};

export default Layout;
