import { Fade } from "react-awesome-reveal";

const ContentHeader = (): JSX.Element => {
  return (
    <Fade cascade direction="up">
      <section className="section-header">
        <h2>Contents</h2>
        <p>
          We focus on ergonomics and meeting you where you work. <br />
          It's only a keystroke away.
        </p>
      </section>
    </Fade>
  );
};

export default ContentHeader;
