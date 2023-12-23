interface ItestimonialsData {
  testimonial_desktop: Itestimonial[];
  testimonial_responsive: Itestimonial[];
}

interface Itestimonial {
  avatar: string;
  name: string;
  job: string;
  text: string;
}

export default function testimonials() {
  const testimonialsData: ItestimonialsData = {
    testimonial_desktop: [
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
    ],
    testimonial_responsive: [
      {
        avatar: "/avatar-5.png",
        name: "Wade Steward",
        job: "Designer",
        text: `Slate helps you see how many 
        more days you need to work to 
        reach your financial goal for the
         month and year. Slate helps 
        you see how many more days 
        you need to work to reach your 
        financial goal for the month and 
        year.your financial 
        goal for the month and year.`,
      },
      {
        avatar: "/avatar-6.png",
        name: "Philip Watson",
        job: "Designer",
        text: `Slate helps you see how many 
        more days you need to work to 
        reach your financial goal for the
         month and year. Slate helps 
        you see how many more days 
        you need to work to reach your 
        financial goal for the month and 
        year.your financial 
        goal for the month and year.`,
      },
      {
        avatar: "/avatar-7.png",
        name: "Arthur Wilson",
        job: "Designer",
        text: `Slate helps you see how many 
        more days you need to work to 
        reach your financial goal for the
         month and year. Slate helps 
        you see how many more days 
        you need to work to reach your 
        financial goal for the month and 
        year.your financial 
        goal for the month and year.`,
      },
      {
        avatar: "/avatar-8.png",
        name: "Regina Black",
        job: "Designer",
        text: `Slate helps you see how many 
        more days you need to work to 
        reach your financial goal for the
         month and year. Slate helps 
        you see how many more days 
        you need to work to reach your 
        financial goal for the month and 
        year.your financial 
        goal for the month and year.`,
      },
    ],
  };

  return { testimonialsData };
}
