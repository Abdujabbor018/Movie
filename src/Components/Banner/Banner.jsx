import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = ({ lang, isDark }) => {
  const slides = [
    {
      image:
        "https://wallpapers.com/images/featured/harry-potter-gi5aixvd4d26cpij.jpg", // Titanic
      title: {
        uz: "Garri Potter",
        en: "Harry Potter",
      },
      desc: {
        uz: "Xogvarts sehrgarlik maktabi va yovuz kuchlarga qarshi afsonaviy kurash.",
        en: "The legendary struggle of Hogwarts School and the fight against dark forces.",
      },
    },
    {
      image: "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      title: {
        uz: "O'rgimchak-odam: Uyga yo'l yo'q",
        en: "Spider-Man: No Way Home",
      },
      desc: {
        uz: "Multiolamlar to'qnashuvi: Piter Parkerni hayotidagi eng katta sinov kutmoqda.",
        en: "Multiverse collides: Peter Parker faces the greatest challenge of his life.",
      },
    },
    {
      image: "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
      title: {
        uz: "Avatar",
        en: "Avatar",
      },
      desc: {
        uz: "Pandora sayyorasining go'zalligi va ona tabiatni asrash yo'lidagi kurash.",
        en: "The breathtaking world of Pandora and the epic battle to save nature.",
      },
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="banner">
      <div
        className="banner-slide"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className={`overlay ${isDark ? "dark" : "light"}`}>
          <h1>{slides[current].title[lang]}</h1>
          <p>{slides[current].desc[lang]}</p>
          <button className="banner-btn">
  {lang === "uz" ? "Ko‘rishni boshlash" : "Watch Now"}
</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;      