import React, { useEffect, useState } from "react";
import Ico from "../images/ico.png";
import "../css/Header.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  return (
    <div className="header-cont">
      <div className="project-brand">
        <img className="brand-img" src={Ico} alt="icon" />
        <span>To-Do-App</span>
      </div>
      <div className="dark-or-light-cont">
        {isDark ? (
          <LightModeIcon
            onClick={() => setIsDark(false)}
            className="dark-or-light-ico light-ico"
          />
        ) : (
          <NightlightRoundIcon
            onClick={() => setIsDark(true)}
            className="dark-or-light-ico light-ico"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
