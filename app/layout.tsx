import "./globals.css";
import MasterLayout from "@/containers/MasterLayout";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MasterLayout>{children}</MasterLayout>
      </body>
    </html>
  );
};

export default Layout;
