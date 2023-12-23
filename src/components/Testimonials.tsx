import TestimonialsCard from "./testimonials/TestimonialsCard";

const Testimonials = (): JSX.Element => {
  return (
    <section id="testimonials">
      <div className="title">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-content">
        <div className="row">
          <div className="col-6">
            <TestimonialsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
