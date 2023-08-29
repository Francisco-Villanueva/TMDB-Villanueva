import React from "react";
import Profile from "./Profile";
import SwitchTheme from "./SwitchTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search/Search";
export default function Navbar() {
  const userLoged = localStorage.getItem("userLogged");

  const user = {
    name: userLoged,
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

  return (
    <nav id="navbar" className="navbar_main">
      <h3>TMDB </h3>

      <Search />

      <div className="navbar_profile">
        <SwitchTheme />
        <Profile user={user} />
      </div>
    </nav>
  );
}
