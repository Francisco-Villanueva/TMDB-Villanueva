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
import Home_List from "./components/List/Home_List";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Register from "./components/Login/Register";
import Landing from "./components/Login/Landing";

function App() {
  const dispatch = useDispatch();

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
      <Routes>
        <Route path="/login" element={<Landing />} />
        <Route path="/register" element={<Landing />} />

        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <Home_List />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
