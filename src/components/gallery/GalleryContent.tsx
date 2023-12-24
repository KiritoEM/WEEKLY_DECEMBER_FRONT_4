import gallery from "@/helpers/data/gallery";
import { Fade } from "react-awesome-reveal";

const GalleryContent = (): JSX.Element => {
  const { galleryData } = gallery();
  return (
    <section className="section-content">
      <div className="section-desktop d-none d-md-flex">
        <Fade cascade direction="left">
          <div className="section-1">
            {galleryData.section1.map((item, index) => (
              <div className="img" key={index}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </Fade>
        <Fade cascade direction="right">
          <div className="section-2">
            {galleryData.section2.map((item, index) => (
              <div className="img" key={index} id={item.id}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </Fade>
      </div>
      <div className="section-responsive d-md-none">
        <Fade cascade direction="up">
          {galleryData.section_reponsive.map((item, index) => (
            <div className="img" key={index}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </Fade>
      </div>
      <Fade direction="up">
        <div className="button">
          <button className="btn">See More</button>
        </div>
      </Fade>
    </section>
  );
};

export default GalleryContent;
