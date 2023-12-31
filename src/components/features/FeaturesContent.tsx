import Image from "next/image";
import FeaturesCard from "./FeaturesCard";
import features from "@/helpers/data/features";
import { Fade } from "react-awesome-reveal";

const FeaturesContent = (): JSX.Element => {
  const { featuresPoints } = features();
  return (
    <div className="section-content mt-4 mt-lg-5">
      <div className="row gx-5 gy-5 gy-md-2">
        <div className="col-md-6 col-lg-8">
          <Fade direction="left">
            <div className="cover">
              <Image
                src="/features-img.png"
                alt="Description de l'image"
                width={1000}
                height={100}
                layout="responsive"
              />
            </div>
          </Fade>
        </div>
        <div className="col-md-6 col-lg-4">
          <Fade direction="right">
            <div className="points">
              {featuresPoints.map((item, index) => (
                <FeaturesCard key={index} {...item} />
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FeaturesContent;
