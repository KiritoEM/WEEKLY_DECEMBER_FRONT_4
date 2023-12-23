import Image from "next/image";

const PartnersContent = (): JSX.Element => {
  return (
    <section className="section-content">
      <div className="row">
        <div className="col-2">
          {" "}
          <div className="icon">
            <Image
              src="/screens.png"
              alt="Description de l'image"
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersContent;
