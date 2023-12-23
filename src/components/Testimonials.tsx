import TestimonialsCard from "./testimonials/TestimonialsCard";
import testimonials from "@/helpers/data/testimonials";

const Testimonials = (): JSX.Element => {
  const { testimonialsData } = testimonials();
  return (
    <section id="testimonials">
      <div className="title">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-content">
        <div className="row gy-4">
          {testimonialsData.map((item, index) => (
            <div className="col-6" key={index}>
              <TestimonialsCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
