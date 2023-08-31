import axios from "axios";
import { createContext, useState } from "react";
const initialState = {
  user: {},
  favorites: [],
  playlists: [],
  id_LS: localStorage.getItem("userId") ? localStorage.getItem("userId") : "",
};

export const UserContext = createContext(initialState);

export function UserProvider({ children }) {
  const [state, setState] = useState({
    user: {},
    favorites: [],
    playlists: [],
    id_LS: localStorage.getItem("userId"),
  });

  function setUser(user) {
    setState((state) => ({ ...state, user: user }));

    console.log("User setteado");
  }

  const logOut = () => {
    localStorage.clear();
    setState((s) => ({ ...s, id_LS: null, user: {} }));
  };

  const addToFavorites = async (userId, movieId) => {
    try {
      const newFavorite = await axios.post(
        `http://localhost:4000/user/${userId}/favorites/${movieId}`
      );

      console.log(newFavorite.data);
    } catch (error) {
      console.log(error);
    }
  };

  const setFavorites = async (array) => {
    const arrayOfMoviesId = array.map((m) => m.idMovie);
    console.log("Inicio FAVORITES: ", arrayOfMoviesId);

    const fetchMovieDetails = async (movieId) => {
      try {
        const response = await axios.get(
          `http://localhost:4000/movies/details/${movieId}`
        );

        return response.data; // Suponiendo que los detalles de la película se encuentren en response.data
      } catch (error) {
        console.error("Error al obtener detalles de la película:", error);
        // return null;
      }
    };

    // Función para obtener los detalles de todas las películas en arrayOfMoviesId
    const fetchAllMovieDetails = async () => {
      try {
        const detailsPromises = arrayOfMoviesId.map((movieId) =>
          fetchMovieDetails(movieId)
        );
        const movieDetailsArray = await Promise.all(detailsPromises);
        // console.log("EN PROMISE ALL", { movieDetailsArray });

        setState((state) => ({ ...state, favorites: movieDetailsArray }));

        return movieDetailsArray;
      } catch (error) {
        console.log({ error });
      }
    };

    fetchAllMovieDetails();
  };
  return (
    <UserContext.Provider
      value={{
        ...state,
        setUser,
        logOut,
        addToFavorites,
        setFavorites,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
