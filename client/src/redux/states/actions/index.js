import axios from "axios";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;
  try {
    const response = await axios.get(
      `http://localhost:4000/general/search/s=${search}`
    );

    return response.data;
  } catch (error) {
    throw new Error("Error searching !");
  }
};
