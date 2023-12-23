import Navbar from "@/components/Navbar";
import React, { Fragment, ReactNode } from "react";

interface Ichildren {
  children: ReactNode;
}

const Layout: React.FC<Ichildren> = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default Layout;
