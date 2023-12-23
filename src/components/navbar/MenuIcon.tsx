import Image from "next/image";
import React from "react";

interface Iaction {
  action: () => void;
}

const MenuIcon: React.FC<Iaction> = ({ action }): JSX.Element => {
  return (
    <div className="menu-icon d-lg-none">
      <Image
        src="/menu-icon.png"
        alt="Description de l'image"
        width={33}
        height={33}
        onClick={() => action()}
      />
    </div>
  );
};

export default MenuIcon;
