import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden flex flex-col min-h-screen p-5 m-5">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
