import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { getMovieDetails } from "../../redux/states/actions/moviesActions";
import axios from "axios";

export default function Favorites() {
  const { favorites } = useContext(UserContext);

  const arrayOfMoviesId = favorites.map((m) => m.idMovie);

  // Estado para almacenar los detalles de las películas
  const [movieDetails, setMovieDetails] = useState([]);

  // Función para obtener los detalles de una película por su ID
  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/movies/details/${movieId}`
      );

      return response.data; // Suponiendo que los detalles de la película se encuentren en response.data
    } catch (error) {
      console.error("Error al obtener detalles de la película:", error);
      return null;
    }
  };

  // Función para obtener los detalles de todas las películas en arrayOfMoviesId
  const fetchAllMovieDetails = async () => {
    const detailsPromises = arrayOfMoviesId.map((movieId) =>
      fetchMovieDetails(movieId)
    );
    const movieDetailsArray = await Promise.all(detailsPromises);
    setMovieDetails(movieDetailsArray);
  };

  useEffect(() => {
    if (arrayOfMoviesId.length > 0) {
      fetchAllMovieDetails();
    }
  }, []); // Se ejecutará una vez al montar el componente

  console.log(movieDetails);
  return <div>Favorits</div>;
}
