import MenuIcon from "./navbar/MenuIcon";
import MenuItems from "./navbar/MenuItems";
import NavbarResponsive from "./navbar/NavbarResponsive";
import { useNav } from "@/hooks/useNav";
import Overlay from "./navbar/Overlay";

const Navbar = (): JSX.Element => {
  const { menuToogle, openMenu, openOverlay } = useNav();
  return (
    <nav id="navbar">
      <div id="navbar__container">
        <section className="section-logo">
          <img src="/logo dark.png" alt="" />
        </section>
        <MenuItems />
        <section className="section-button">
          <button className="btn">Login</button>
          <MenuIcon action={menuToogle} />
        </section>
      </div>
      <NavbarResponsive openMenu={openMenu} />
      <Overlay overlay={openOverlay} />
    </nav>
  );
};

export default Navbar;
