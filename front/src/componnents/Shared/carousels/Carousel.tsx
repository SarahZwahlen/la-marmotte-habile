import { useEffect, useState } from "react";
import IconSolid from "../icon";
import "./Carousel.scss";

interface CarouselProps {
  images: string[];
  carouselDelay: number;
}

const Carousel = (props: CarouselProps) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, props.carouselDelay);
    return () => clearInterval(interval);
  }, [imageIndex]);

  const nextImage = () => {
    if (imageIndex === props.images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const previousImage = () => {
    imageIndex === 0
      ? setImageIndex(props.images.length - 1)
      : setImageIndex(imageIndex - 1);
  };

  return (
    <section className="carousel">
      <img src={props.images[imageIndex]} />
      <div className="carousel-nav-buttons">
        <button className="button-icon" onClick={previousImage}>
          <IconSolid iconName="chevron-left" />
        </button>
        <button className="button-icon" onClick={nextImage}>
          <IconSolid iconName="chevron-right" />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
