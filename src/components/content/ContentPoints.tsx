import ContentCard from "./ContentCard";
import content from "@/helpers/data/content";
import { Flip } from "react-awesome-reveal";

const ContentPoints = () => {
  const { contentData } = content();
  return (
    <Flip direction="horizontal">
      <section className="section-points mt-4">
        <div className="row gy-4 gy-md-2">
          {contentData.map((item, index) => (
            <div className="col-md-6" key={index}>
              <ContentCard {...item} />
            </div>
          ))}
        </div>
      </section>
    </Flip>
  );
};

export default ContentPoints;
