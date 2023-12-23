import navbar from "@/helpers/data/navbar";

const NavbarResponsive = (): JSX.Element => {
  const { menuItems } = navbar();
  return (
    <section className="nav-responsive d-lg-none">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
    </section>
  );
};

export default NavbarResponsive;
