import axios from "axios";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;
  try {
    const response = await axios.get(
      `http://localhost:4000/general/search/s=${search}`
    );

    // console.log("ENTRO AL SEARCH MOVIES: ", res1);

    // const res2 = await fetch(
    //   `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=2`
    // );
    // const res3 = await fetch(
    //   `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=3`
    // );
    // const json2 = await res2.json();
    // const json3 = await res3.json();

    // const movies = res1.data.map((m) => ({
    //   id: m.id,
    //   title: m.original_title,
    //   overview: m.overview,
    //   poster: m.poster_path,
    //   rate: m.vote_average,
    //   genresId: m.genre_ids,
    //   popularity: m.popularity,
    //   date: m.release_date,
    // }));

    // return movies;

    return response.data;
  } catch (error) {
    throw new Error("Error searching !");
  }
};
