import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
const imgs = [
  { src: "https://source.unsplash.com/random/300x300?r=1" },
  { src: "https://source.unsplash.com/random/300x300?r=2" },
  { src: "https://source.unsplash.com/random/300x300?r=3" },
];
export default function Hero() {
  const [img, setImg] = useState(imgs[0].src);
  function changeImg(order) {
    setImg(imgs[order].src);
  }
  return (
    <section className="hero-section">
      <div className="hero-intro">
        <h1>Cera</h1>
        <p>Shop the latest collection of clothing and accessories</p>
        <Link to="collections" relative="path">
        cera store
        </Link>
      </div>
      <div className="hero-img">
        <img src={img} alt="chosen-img" />
      </div>
      <div className="hero-photos">
        {imgs.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`hero-img-${i}`}
            className="hero-img-btn"
            onClick={() => changeImg(i)}
          />
        ))}
      </div>
    </section>
  );
}
