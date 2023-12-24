import Image from "next/image";
import partners from "@/helpers/data/partners";
import { Flip } from "react-awesome-reveal";

const PartnersContent = (): JSX.Element => {
  const { partnersIcons } = partners();
  return (
    <section className="section-content">
      <Flip direction="vertical">
        <div className="icons">
          {partnersIcons.map((item, index) => (
            <div className="icon" key={index}>
              <img src={item.icon} alt="" />
            </div>
          ))}
        </div>
      </Flip>
      <div className="button">
        <Flip direction="vertical">
          <button className="btn">All Partners</button>
        </Flip>
      </div>
    </section>
  );
};

export default PartnersContent;
