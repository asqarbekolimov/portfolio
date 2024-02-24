import { ChildProps } from "@/type";
import Navbar from "./_components/navbar/navbar";
import Left from "./_components/left/left";
import Right from "./_components/right/right";

const Layout = ({ children }: ChildProps) => {
  return (
    <main>
      <Navbar />
      <div className="container">
        <Left />
        <Right />
        {children}
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
