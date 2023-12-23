import ContentHeader from "./content/ContentHeader";
import ContentPoints from "./content/ContentPoints";

const Content = (): JSX.Element => {
  return (
    <section id="content">
      <ContentHeader />
      <ContentPoints />
    </section>
  );
};

export default Content;
