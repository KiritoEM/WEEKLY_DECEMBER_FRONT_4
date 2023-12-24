import { Fade } from "react-awesome-reveal";

const PartnersHeader = (): JSX.Element => {
  return (
    <Fade cascade direction="up">
      <section className="section-header">
        <h2>Partners</h2>
        <p>
          We focus on ergonomics and meeting you where you work. <br />
          It's only a keystroke away.
        </p>
      </section>
    </Fade>
  );
};

export default PartnersHeader;
