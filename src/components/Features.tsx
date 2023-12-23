import FeaturesContent from "./features/FeaturesContent";
import FeaturesHeader from "./features/FeaturesHeader";

const Features = (): JSX.Element => {
  return (
    <section id="features">
      <FeaturesHeader />
      <FeaturesContent />
    </section>
  );
};

export default Features;
