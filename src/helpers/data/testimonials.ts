interface ItestimonialsData {
  avatar: string;
  name: string;
  job: string;
  text: string;
}

export default function testimonials() {
  const testimonialsData: ItestimonialsData[] = [
    {
      avatar: "/avatar-1.png",
      name: "Claire Bell",
      job: "Designer",
      text: ` Slate helps you see how many more days you need to work to reach your
        financial goal for the month and year. Slate helps you see how many
        more days you need to work to reach your financial goal for the month
        and year.your financial goal for the month and year.`,
    },
    {
      avatar: "/avatar-2.png",
      name: "Francisco Lane",
      job: "Designer",
      text: ` Slate helps you see how many more days 
      you need to work to reach your financial 
      goal for the month and year. Slate helps 
      you see how many more days 
      you need to work to reach your financial 
      goal for the month and year.`,
    },
    {
      avatar: "/avatar-3.png",
      name: "Ralph Fisher",
      job: "Designer",
      text: ` Slate helps you see how many more days 
      you need to work to reach your financial 
      goal for the month and year. Slate helps 
      you see how many more days 
      you need to work to reach your financial 
      goal for the month and year.`,
    },
    {
      avatar: "/avatar-4.png",
      name: "Jorge Murphy",
      job: "Designer",
      text: ` Slate helps you see how many more days 
      you need to work to reach your financial 
      goal for the month and year. Slate helps 
      you see how many more days 
      you need to work to reach your financial 
      goal for the month and year.`,
    },
  ];

  return { testimonialsData };
}
