import Navbar from "@/components/Navbar";
import { NavProvider } from "@/hooks/useNav";
import React, { Fragment, ReactNode } from "react";

interface Ichildren {
  children: ReactNode;
}

const Layout: React.FC<Ichildren> = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <NavProvider>
        <Navbar />
        {children}
      </NavProvider>
    </Fragment>
  );
};

export default Layout;
