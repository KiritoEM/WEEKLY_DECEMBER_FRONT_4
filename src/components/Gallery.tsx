import GalleryContent from "./gallery/GalleryContent";
import GalleryHeader from "./gallery/GalleryHeader";

const Gallery = (): JSX.Element => {
  return (
    <section id="gallery">
      <GalleryHeader />
      <GalleryContent />
    </section>
  );
};

export default Gallery;
