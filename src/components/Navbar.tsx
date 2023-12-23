const Navbar = (): JSX.Element => {
  return (
    <nav id="navbar">
      <div id="navbar__container">
        <section className="section-logo">
             <img src="/logo dark.png" alt="" />
        </section>
        <section className="section-menuitems"></section>
        <section className="section-button"></section>
      </div>
    </nav>
  );
};

export default Navbar;
