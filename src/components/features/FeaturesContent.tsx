import Image from "next/image";
import FeaturesCard from "./FeaturesCard";

const FeaturesContent = (): JSX.Element => {
  return (
    <div className="section-content mt-5">
      <div className="row gx-5">
        <div className="col-8">
          <div className="cover">
            <Image
              src="/features-img.png"
              alt="Description de l'image"
              width={1000}
              height={100}
              layout="responsive"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="points">
            <FeaturesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesContent;
