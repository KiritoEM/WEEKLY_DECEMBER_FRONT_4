const FeaturesCard = (): JSX.Element => {
  return (
    <div className="features-card">
      <div className="features-card__header">
        <div className="img">
          <img src="/features-1.png" alt="" />
        </div>
        <div className="title">
          {" "}
          <h5>A single source of truth</h5>
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
