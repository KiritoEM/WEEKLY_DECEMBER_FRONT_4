import Image from "next/image";

const WelcomingSreens = (): JSX.Element => {
  return (
    <section className="welcoming-screens">
      <Image
        src="/screens.png"
        alt="Description de l'image"
        width={2000}
        height={1200}
        layout="responsive"
        className="screens"
      />
      <img src="/Gradient.png" alt="" />
    </section>
  );
};

export default WelcomingSreens;
