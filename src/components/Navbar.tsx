import MenuIcon from "./navbar/MenuIcon";
import MenuItems from "./navbar/MenuItems";
import NavbarResponsive from "./navbar/NavbarResponsive";

const Navbar = (): JSX.Element => {
  return (
    <nav id="navbar">
      <div id="navbar__container">
        <section className="section-logo">
          <img src="/logo dark.png" alt="" />
        </section>
        <MenuItems />
        <section className="section-button">
          <button className="btn">Login</button>
          <MenuIcon />
        </section>
      </div>
      <NavbarResponsive />
    </nav>
  );
};

export default Navbar;
