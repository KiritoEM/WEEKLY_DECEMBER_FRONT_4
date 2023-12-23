import ContentCard from "./ContentCard";
import content from "@/helpers/data/content";

const ContentPoints = () => {
  const { contentData } = content();
  return (
    <section className="section-points mt-4">
      <div className="row">
        {contentData.map((item, index) => (
          <div className="col-6" key={index}>
            <ContentCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentPoints;
