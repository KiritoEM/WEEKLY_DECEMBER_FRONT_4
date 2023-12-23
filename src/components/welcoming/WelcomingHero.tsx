const WelcomingHero = (): JSX.Element => {
  return (
    <section className="welcoming-hero">
      <div className="title">
        <h1>Work at the speed of thought</h1>
      </div>
      <div className="text">
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div className="buttons">
        <div className="btn-1">
          <button className="btn">Try For Free</button>
        </div>
        <div className="btn-2">
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default WelcomingHero;
