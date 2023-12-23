interface ItestimonialsProps {
  avatar: string;
  name: string;
  job: string;
  text: string;
}

const TestimonialsCard: React.FC<ItestimonialsProps> = ({
  avatar,
  name,
  job,
  text,
}): JSX.Element => {
  return (
    <div className="testimonials-card">
      <div className="client">
        <div className="img">
          <img src={avatar} alt="" />
        </div>
        <div className="info">
          <p>{name}</p>
          <h6>{job}</h6>
        </div>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
