import navbar from "@/helpers/data/navbar";

const MenuItems = (): JSX.Element => {
  const { menuItems } = navbar();
  return (
    <section className="section-menuitems">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
    </section>
  );
};

export default MenuItems;
