import navbar from "@/helpers/data/navbar";

interface IopenMenu{
  openMenu : boolean
}

const NavbarResponsive : React.FC<IopenMenu> = ({openMenu}): JSX.Element => {
  const { menuItems } = navbar();
  return (
    <section className={`nav-responsive d-lg-none ${openMenu ? "open-menu" : "close-menu"}`}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
        <li id="footer">
          <div className="line"></div>
          <div className="text">
            <p>Work at the speed of thought.</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default NavbarResponsive;
