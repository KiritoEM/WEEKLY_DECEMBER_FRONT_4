interface IcontentData {
  title: string;
  img: string;
  button: string;
  id?: string;
}

export default function content() {
  const contentData: IcontentData[] = [
    { img: "/content-1.png", title: "Work", button: "Sign Up", id: "content-1" },
    {
      img: "/content-2.png",
      title: "Design with real data",
      button: "Try For Free",
    },
  ];

  return { contentData };
}
