import gallery from "@/helpers/data/gallery";

const GalleryContent = (): JSX.Element => {
  const { galleryData } = gallery();
  return (
    <section className="section-content mt-4">
      <div className="section-desktop">
        <div className="section-1">
          {galleryData.section1.map((item, index) => (
            <div className="img" key={index}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
        <div className="section-2">
          {galleryData.section2.map((item, index) => (
            <div className="img" key={index} id={item.id}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryContent;
