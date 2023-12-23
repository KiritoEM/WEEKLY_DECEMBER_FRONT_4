import Image from "next/image";
import partners from "@/helpers/data/partners";

const PartnersContent = (): JSX.Element => {
  const { partnersIcons } = partners();
  return (
    <section className="section-content">
      <div className="icons">
        {partnersIcons.map((item, index) => (
          <div className="icon" key={index}>
            <img src={item.icon} alt="" />
          </div>
        ))}
      </div>
      <div className="button">
        <button className="btn">All Partners</button>
      </div>
    </section>
  );
};

export default PartnersContent;
