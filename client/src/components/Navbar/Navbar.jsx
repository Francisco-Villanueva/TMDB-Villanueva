import React, { useEffect, useContext, useState, Profiler } from "react";
import Profile from "./Profile";
import SwitchTheme from "./SwitchTheme";
import Search from "./Search/Search";
import Popover from "@mui/material/Popover";
import { UserContext } from "../../context/UserContext";
export default function Navbar({ search, setSearch, moviesHook }) {
  // console.log(moviesHook);'

  const { favorites, user, id_LS } = useContext(UserContext);
  console.log({ user, favorites, id_LS });

  const currentUser = {
    name: user.name,
    color: "#fff",
  };
  // Función para cambiar el estilo del navbar al hacer scroll
  function handleScroll() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  // Escuchar el evento de scroll
  window.addEventListener("scroll", handleScroll);

  const handleBack = () => {
    setSearch("");
  };
  return (
    <nav id="navbar" className="navbar_main">
      <h3 onClick={handleBack}>TMDB </h3>

      <Search search={search} setSearch={setSearch} moviesHook={moviesHook} />

      <div className="navbar_profile">
        <SwitchTheme />
        <Profile user={currentUser} />
      </div>
    </nav>
  );
}
