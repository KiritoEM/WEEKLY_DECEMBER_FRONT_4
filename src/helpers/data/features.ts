interface IfeaturesPoints {
  img: string;
  title: string;
}

export default function features() {
  const featuresPoints: IfeaturesPoints[] = [
    {
      img: "/features-1.png",
      title: "A single source of truth",
    },
    {
      img: "/features-2.png",
      title: "Intuitive interface",
    },
    {
      img: "/features-3.png",
      title: "Or with rules",
    },
  ];

  return { featuresPoints };
}
