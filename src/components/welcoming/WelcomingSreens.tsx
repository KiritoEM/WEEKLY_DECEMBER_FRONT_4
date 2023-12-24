import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const WelcomingSreens = (): JSX.Element => {
  return (
    <section className="welcoming-screens">
      <Fade direction="left">
        <Image
          src="/screens.png"
          alt="Description de l'image"
          width={2000}
          height={1200}
          layout="responsive"
          className="screens"
        />
      </Fade>
      <img src="/Gradient.png" alt="" />
    </section>
  );
};

export default WelcomingSreens;
