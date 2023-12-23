import MenuItems from "./navbar/MenuItems";

const Navbar = (): JSX.Element => {
  return (
    <nav id="navbar">
      <div id="navbar__container">
        <section className="section-logo">
          <img src="/logo dark.png" alt="" />
        </section>
        <MenuItems />
        <section className="section-button">
             <button className="btn">
                 Login
             </button>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
