import TestimonialsCard from "./testimonials/TestimonialsCard";
import testimonials from "@/helpers/data/testimonials";
import { Fade } from "react-awesome-reveal";

const Testimonials = (): JSX.Element => {
  const { testimonialsData } = testimonials();
  return (
    <section id="testimonials">
      <Fade direction="up">
        <div className="title">
          <h2>Testimonials</h2>
        </div>
      </Fade>
      <div className="testimonials-content d-none d-md-flex">
        <div className="row gy-4">
          {testimonialsData.testimonial_desktop.map((item, index) => (
            <div className="col-md-6" key={index}>
              <Fade direction="up" cascade>
                <TestimonialsCard {...item} />
              </Fade>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-responsive d-md-none">
        <div className="row gy-4">
          {testimonialsData.testimonial_responsive.map((item, index) => (
            <div className="col-md-6" key={index}>
              <Fade direction="up" cascade>
                <TestimonialsCard {...item} />
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
