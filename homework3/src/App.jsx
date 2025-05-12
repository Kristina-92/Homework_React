import React from "react";
import { Movies } from "./components/Movies";

const movies = [
  {
    name: "The Godfather",
    date: "1972",
    genre: "Gangster, Crime, Drama",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    rating: " 9.2 / 10",
    director: "Francis Ford Coppola",
    cast: "Marlon Brando, Al Pacino, James Caan",
    imdbLink:
      "https://www.imdb.com/title/tt0068646/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_The%2520Godfather",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Inception",
    date: "2010",
    genre: "Action, Adventure, Sci-Fi, Thriller",
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    rating: "8.8 / 10",
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    imdbLink: "https://www.imdb.com/title/tt1375666/?ref_=fn_all_ttl_1",
    imgUrl:
      "https://m.media-amazon.com/images/I/71ZoAHU+byL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Mission Impossible - Fallout",
    date: "2018",
    genre: "Action, Adventure, Thriller",
    plot: "A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage.",
    rating: "7.7 / 10",
    director: "Christopher McQuarrie",
    cast: "Tom CruiseHenry CavillVing Rhames",
    imdbLink: "https://www.imdb.com/title/tt4912910/?ref_=ls_t_1",
    imgUrl: "https://static.toiimg.com/photo/67192341.cms?imgsize=71752",
  },
  {
    name: "The Dark Knight",
    date: "2008",
    genre: "Action, Crime, Drama, Thriller",
    plot: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
    rating: "9.0 / 10",
    director: "Christopher Nolan",
    cast: "Christian Bale,Heath Ledger, Aaron Eckhart",
    imdbLink: "https://www.imdb.com/title/tt0468569/?ref_=fn_all_ttl_1",
    imgUrl:
      "https://nowplayingpodcast.com/wp-content/uploads/2021/09/qJ2tW6WMUDux911r6m7haRef0WH-683x1024.jpg",
  },
  {
    name: "Avengers Infinity War",
    date: "2018",
    genre: "Sci-Fi, Superhero, Action, Adventure",
    plot: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    rating: "8.4 / 10",
    director: "Anthony Russo,Joe Russo",
    cast: "Robert Downey Jr.Chris HemsworthMark Ruffalo",
    imdbLink: "https://www.imdb.com/title/tt4154756/?ref_=fn_all_ttl_4",
    imgUrl:
      "https://m.media-amazon.com/images/I/51Rk3e0IomL._UF1000,1000_QL80_.jpg",
  },
];

export function App() {
  return (
    <div id="app">
      <h1>Movies</h1>
      <Movies movies={movies} />
    </div>
  );
}
