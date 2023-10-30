import JewelleryCard from "../../componnents/JewelleryCard/JewelleryCard";
import data from "../../data/data";
import { Jewelry } from "../../types/jewellery.type";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <main>
      <h2>Galerie</h2>
      <section className="galery">
        {data.map((element: Jewelry) => (
          <JewelleryCard jewel={element} />
        ))}
      </section>
    </main>
  );
};

export default Gallery;
