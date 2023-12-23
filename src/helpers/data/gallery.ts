interface IgalleryData {
  section1: Iimg[];
  section2: Iimg[];
  section_reponsive: Iimg[];
}

interface Iimg {
  img: string;
  id?:string
}

export default function gallery() {
  const galleryData: IgalleryData = {
    section1: [
      { img: "/gallery-1.png" },
      { img: "/gallery-2.png" },
      { img: "/gallery-3.png" },
      { img: "/gallery-4.png" },
    ],
    section2: [
      { img: "/gallery-5.png" },
      { img: "/gallery-6.png" , id:"img-2"},
      { img: "/gallery-7.png" },
    ],
    section_reponsive: [
      { img: "" },
      { img: "" },
      { img: "" },
      { img: "" },
      { img: "" },
      { img: "" },
    ],
  };

  return { galleryData };
}
