import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";

const WelcomingHero = (): JSX.Element => {
  return (
    <section className="welcoming-hero">
      <div className="title">
        <h1>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Work at the speed of thought")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </h1>
      </div>
      <Fade direction="down">
        <div className="text">
          <p>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>
      </Fade>
      <Fade cascade direction="up">
        <div className="buttons">
          <div className="btn-1">
            <button className="btn">Try For Free</button>
          </div>
          <div className="btn-2">
            <button className="btn">Learn More</button>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default WelcomingHero;
