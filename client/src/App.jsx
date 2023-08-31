import { useEffect, useState } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";

import {
  fetchPopular,
  fetchNowPlaying,
  fetchTopRated,
  fetchUpComing,
} from "./redux/states/moviesSlice";
import {
  fetchPopular as fetchPopularTv,
  fetchTopRated as fetchTopRatedTv,
  fetchAiringToday,
  fetchOnTheAir,
} from "./redux/states/tvSlice";

import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Login/Landing";
import useSearch from "./hooks/useSearch";
import HomePage from "./components/Home/HomePage";
import Searched from "./components/SearchedResults/Searched";
import { useMovies } from "./hooks/useMovies";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";
function App() {
  const dispatch = useDispatch();
  const { search, error, setSearch } = useSearch();
  const moviesHook = useMovies({ search });
  const { favorites, user, id_LS, setUser } = useContext(UserContext);

  const { movies, getMovies, loading } = moviesHook;
  useEffect(()=>{
    if(id_LS && !user.name){
      axios.get(`http://localhost:4000/user/${id_LS}`)
      .then(({data})=>{
        console.log("ENTRO CUANDO HAY ID, PERO NO USER DATA, METO: \n", data);
        setUser(data)
      })
    }
  },[id_LS])
  // getAllInfo
  useEffect(() => {
    //MOVIES DISPATCHS
    dispatch(fetchPopular());
    dispatch(fetchNowPlaying());
    dispatch(fetchTopRated());
    dispatch(fetchUpComing());
  }, []);

  useEffect(() => {
    //TV DISPATCHS
    dispatch(fetchAiringToday());
    dispatch(fetchPopularTv());
    dispatch(fetchTopRatedTv());
    dispatch(fetchOnTheAir());
  }, []);
  return (
    <div className="app">
      {/* <UserPopOver /> */}
      <Routes>
        <Route path="/login" element={<Landing />} />
        <Route path="/register" element={<Landing />} />

        <Route
          path="/"
          element={
            <>
              <Navbar search={search} setSearch={setSearch} moviesHook={...moviesHook}/>
              {search ? (
                <Searched busqueda={search} movies_list={movies} />
              ) : (
                <HomePage />
              )}
              <Footer />
            </>
          }
        />
        <Route path='/favorites' element ={<Favorites />}/>
      </Routes>
    </div>
  );
}

export default App;
