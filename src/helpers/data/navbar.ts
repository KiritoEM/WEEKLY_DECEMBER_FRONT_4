interface ImenuItems {
  label: string;
}

export default function navbar() {
  const menuItems: ImenuItems[] = [
    { label: "Home" },
    { label: "Product" },
    { label: "About" },
    { label: "Contact" },
  ];

  return { menuItems };
}
