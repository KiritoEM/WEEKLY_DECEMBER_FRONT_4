import TestimonialsCard from "./testimonials/TestimonialsCard";
import testimonials from "@/helpers/data/testimonials";

const Testimonials = (): JSX.Element => {
  const { testimonialsData } = testimonials();
  return (
    <section id="testimonials">
      <div className="title">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-content d-none d-md-flex">
        <div className="row gy-4">
          {testimonialsData.testimonial_desktop.map((item, index) => (
            <div className="col-md-6" key={index}>
              <TestimonialsCard {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-responsive d-md-none">
        <div className="row gy-4">
          {testimonialsData.testimonial_responsive.map((item, index) => (
            <div className="col-md-6" key={index}>
              <TestimonialsCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
