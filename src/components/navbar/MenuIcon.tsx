import Image from "next/image";
import React from "react";

const MenuIcon = (): JSX.Element => {
  return (
    <div className="menu-icon d-lg-none">
      <Image
        src="/menu-icon.png"
        alt="Description de l'image"
        width={33}
        height={33}
      />
    </div>
  );
};

export default MenuIcon;
