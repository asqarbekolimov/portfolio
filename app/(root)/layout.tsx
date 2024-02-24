import { ChildProps } from "@/type";
import Navbar from "./_components/navbar/navbar";

const Layout = ({ children }: ChildProps) => {
  return (
    <main>
      <Navbar />
      <div className="container">{children}</div>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
