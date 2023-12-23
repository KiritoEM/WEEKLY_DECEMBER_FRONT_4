import WelcomingHero from "./welcoming/WelcomingHero";
import WelcomingSreens from "./welcoming/WelcomingSreens";

const Welcoming = (): JSX.Element => {
  return (
    <section id="welcoming">
      <WelcomingHero />
      <WelcomingSreens />
    </section>
  );
};

export default Welcoming;
