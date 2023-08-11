import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="hidden md:block ">
        <NavBar />
        <div className="content">
          <Outlet />
        </div>
      </div>
      <h1 className="flex justify-center items-center text-center h-full text-xl md:hidden">
        Not Supported! <br /> Soon...
      </h1>
    </>
  );
};

export default Layout;
