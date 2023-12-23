import gallery from "@/helpers/data/gallery";

const GalleryContent = (): JSX.Element => {
  const { galleryData } = gallery();
  return (
    <section className="section-content">
      <div className="section-desktop d-none d-md-flex">
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
      <div className="section-responsive d-md-none">
        {galleryData.section_reponsive.map((item, index) => (
          <div className="img" key={index}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
      <div className="button">
        <button className="btn">See More</button>
      </div>
    </section>
  );
};

export default GalleryContent;
