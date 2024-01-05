// import AppProvider from "@/store/Prvider";
import AppProvider from "./provider";
import "./globals.css";
import MasterLayout from "@/containers/MasterLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
        <AppProvider>
          <MasterLayout>{children}</MasterLayout>
        </AppProvider>
      </body>
    </html>
  );
};

export default Layout;
