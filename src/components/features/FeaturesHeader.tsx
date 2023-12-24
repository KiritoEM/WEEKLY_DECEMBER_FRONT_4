import { Fade } from "react-awesome-reveal";

const FeaturesHeader = (): JSX.Element => {
  return (
    <Fade cascade direction="up">
      <section className="section-header">
        <h2>FEATURES</h2>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </section>
    </Fade>
  );
};

export default FeaturesHeader;
