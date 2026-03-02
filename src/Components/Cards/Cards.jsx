import React, { useState } from "react";
import { movies } from "../../data";
import "./Cards.css";

const Cards = ({ lang }) => {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Barchasi");

  const dict = {
    uz: {
      movieNames: {
        "Inception": "Muqaddima",
        "Titanic": "Titanik",
        "The Dark Knight": "Qora ritsar",
        "Harry Potter and the Prisoner of Azkaban": "Garri Potter va Azkaban mahbusi",
        "The Godfather": "Cho'qintirgan ota",
        "Fast & Furious 6": "Forsaj 6",
        "The Good, the Bad and the Ugly": "Yaxshi, yomon va yovuz",
        "Harry Potter and the Deathly Hallows: Part 2": "Garri Potter va ajal tuhfasi: 2-qism",
        "F1 (Formula 1)": "F1: Formula 1",
        "The Shawshank Redemption": "Shoushenkdan qochish",
        "Fast Five": "Forsaj 5",
        "Interstellar": "Yulduzlararo",
        "Joker": "Joker",
        "The Lord of the Rings: The Return of the King": "Uzuklar hukumdori: Qirolning qaytishi",
        "Parasite": "Parazitlar",
        "The Fast and the Furious": "Forsaj 1",
        "Fight Club": "Jangari klub",
        "The Godfather Part II": "Cho'qintirgan ota 2",
        "Harry Potter and the Deathly Hallows: Part 1": "Garri Potter va ajal tuhfasi: 1-qism",
        "Gladiator": "Gladiator",
        "Forrest Gump": "Forrest Gamp",
        "Furious 7": "Forsaj 7",
        "The Lord of the Rings: The Fellowship of the Ring": "Uzuklar hukumdori: Uzuklar ittifoqi",
        "Robinson Crusoe": "Robinzon Kruzo",
        "Se7en": "Yetti",
        "2 Fast 2 Furious": "Forsaj 2",
        "Harry Potter and the Chamber of Secrets": "Garri Potter va maxfiy hujra",
        "The Lion King": "Sherlar qiroli",
        "The Matrix": "Matritsa",
        "The Fate of the Furious": "Forsaj 8",
        "The Pianist": "Pianinochi",
        "Harry Potter and the Goblet of Fire": "Garri Potter va olovli qadah",
        "The Lord of the Rings: The Two Towers": "Uzuklar hukumdori: Ikki qal'a",
        "The Fast and the Furious: Tokyo Drift": "Forsaj: Tokiodagi poyga",
        "Léon: The Professional": "Leon",
        "F9: The Fast Saga": "Forsaj 9",
        "Goodfellas": "Yaxshi yigitlar",
        "Harry Potter and the Half-Blood Prince": "Garri Potter va yarim qonli shahzoda",
        "Terminator 2: Judgment Day": "Terminator 2: Qiyomat kuni",
        "Fast & Furious 4": "Forsaj 4",
        "Back to the Future": "Kelajakka qaytib",
        "Pulp Fiction": "Kriminal asar",
        "Harry Potter and the Order of the Phoenix": "Garri Potter va Feniks jamiyati",
        "The Silence of the Lambs": "Qo'zilar sukunati",
        "Fast X": "Forsaj 10",
        "Whiplash": "O'lim darajasi (Whiplash)",
        "Schindler's List": "Shindler ro'yxati",
        "Seven Samurai": "Yetti samuray",
        "One Flew Over the Cuckoo's Nest": "Kakku uyasi uzra parvoz"
      },
      all: "Barchasi",
      year: "Yili",
      watch: "Ko‘rish",
      search: "Kino qidirish...",
      title: "🎬 Kinolar",
      noMovie: "❌ Kino topilmadi",
      genres: {
        "Action": "Jangari", "Adventure": "Sarguzasht", "Sci-Fi": "Fantastika",
        "Drama": "Drama", "Romance": "Melodrama", "Crime": "Jinoyat",
        "Family": "Oilaviy", "Fantasy": "Sehrli olam", "Western": "Vestern",
        "Sport": "Sport", "Animation": "Multfilm", "Biography": "Biografiya",
        "War": "Urush", "Mystery": "Detektiv", "Thriller": "Triller", "Comedy": "Komediya"
      }
    },
    en: {
      all: "All",
      year: "Year",
      watch: "Watch Now",
      search: "Search movies...",
      title: "🎬 Movies",
      noMovie: "❌ No movie found",
      genres: {
        "Action": "Action", "Adventure": "Adventure", "Sci-Fi": "Sci-Fi",
        "Drama": "Drama", "Romance": "Romance", "Crime": "Crime",
        "Family": "Family", "Fantasy": "Fantasy", "Western": "Western",
        "Sport": "Sport", "Animation": "Animation", "Biography": "Biography",
        "War": "War", "Mystery": "Mystery", "Thriller": "Thriller", "Comedy": "Comedy"
      }
    }
  };

  const t = dict[lang];

  const rawGenres = ["Barchasi", ...new Set(movies.flatMap((m) => m.genre))];

  const filterData = movies.filter((movie) => {
    const matchSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchGenre = selectedGenre === "Barchasi" || movie.genre.includes(selectedGenre);
    return matchSearch && matchGenre;
  });

  return (
    <div className="container main-content">
      <h1 className="page-title">{t.title}</h1>

      <input
        type="text"
        placeholder={t.search}
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="genre-filter">
        {rawGenres.map((g) => (
          <button
            key={g}
            className={selectedGenre === g ? "genre-btn active" : "genre-btn"}
            onClick={() => setSelectedGenre(g)}
          >
            {g === "Barchasi" ? t.all : (t.genres[g] || g)}
          </button>
        ))}
      </div>

      <div className="cards-container">
        {filterData.length > 0 ? (
          filterData.map((movie) => (
            <div key={movie.id} className="card">
              <a href={movie.link} target="_blank" rel="noopener noreferrer">
                <div className="img-wrapper">
                  <img src={movie.poster} alt={movie.title} className="card-img" />
                  <span className="imdb-badge">IMDb {movie.imdbRating}</span>
                  <div className="card-overlay">
    <button className="watch-btn">{t.watch}</button>
</div>
                </div>
                <div className="card-info">
                  <h2 className="card-title">
                    {lang === 'uz' ? (dict.uz.movieNames[movie.title] || movie.title) : movie.title}
                  </h2>
                  <p className="card-text">
                    <span>{t.year}:</span> <span>{movie.year}</span>
                  </p>
                  <p className="genre">
                    {movie.genre.map(g => t.genres[g] || g).join(", ")}
                  </p>
                </div>
              </a>
            </div>
          ))
        ) : (
          <h2 className="not-found">{t.noMovie}</h2>
        )}
      </div>
    </div>
  );
};

export default Cards;