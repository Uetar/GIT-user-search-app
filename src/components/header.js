import React, { useState } from "react";
import ModeNightIcon from "@mui/icons-material/NightlightRoundSharp";
import LightModeIcon from "@mui/icons-material/LightMode";

function Header(props) {
  const [themeMode, setThemeMode] = useState("Dark");
  function themeToggle() {
    const btn = document.querySelector(".icon-dark");
    btn.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
      if (themeMode === "Light") {
        setThemeMode("Dark");
      } else {
        setThemeMode("Light");
      }
    });
  }
  return (
    <header>
      <h1 className="header-title">devfinder</h1>
      <button className="icon-dark" onClick={themeToggle}>
        <span id="change-theme-name">{themeMode}</span>
        {themeMode === "Light" ? (
          <LightModeIcon
            sx={{ color: "#FCFCFC", height: "2vh", letterSpacing: "4px" }}
          />
        ) : (
          <ModeNightIcon
            sx={{ color: "#FCFCFC", height: "2vh", letterSpacing: "4px" }}
          />
        )}
      </button>
    </header>
  );
}

export default Header;
