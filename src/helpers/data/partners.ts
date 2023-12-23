interface IpartnersIcons {
  icon: string;
}

export default function partners() {
  const partnersIcons: IpartnersIcons[] = [
    { icon: "/partners-1.png" },
    { icon: "/partners-2.png" },
    { icon: "/partners-3.png" },
    { icon: "/partners-4.png" },
    { icon: "/partners-5.png" },
    { icon: "/partners-6.png" },
  ];

  return { partnersIcons };
}
