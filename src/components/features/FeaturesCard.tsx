interface IfeaturesProps {
  img: string;
  title: string;
}

const FeaturesCard: React.FC<IfeaturesProps> = ({
  img,
  title,
}): JSX.Element => {
  return (
    <div className="features-card">
      <div className="features-card__header">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="title">
          {" "}
          <h5>{title}</h5>
        </div>
      </div>
      <div className="features-card__text">
        <p>
          When you add work to your Slate calendar we automatically calculate
          useful insights
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
