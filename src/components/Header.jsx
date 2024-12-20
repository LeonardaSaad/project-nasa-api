// React imports
import { NavLink } from "react-router-dom";
import { useState } from "react";

// i18next Translation import
import i18next, { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

import "../index.css";

// icons
import menu from "../img/hamburguer menu.png";
import Logo from "../img/nasa-logo.png";

const Header = () => {
  const lang = i18next.language;
  const { t } = useTranslation("header");

  const [handleMenu, setHandleMenu] = useState(false);

  return (
    <div className="w-screen">
      <div className="bg-black flex items-center gap-5 component-padding justify-between">
        {/* Hamburguer Menu icon */}
        {/*
         * Used to open and close the nav bar
         * Hidden when the md responsive is used.
         */}
        <img
          onClick={() => setHandleMenu(!handleMenu)}
          src={menu}
          alt={t("icon_navigation.alt_text")}
          className="w-6 py-4 px-3 box-content  md:hidden"
        />

        {/* Nasa logo and site name */}
        <div className="flex items-center gap-5">
          <img src={Logo} alt={t("logo.alt_text")} className="size-14" />

          {/* Hidden when the interface is small */}
          {/* when it only has a logo, it's more beautiful :) */}
          <h1 className="hidden md:block font-bold text-lg">
            NASA API Project
          </h1>
        </div>

        {/* Button to change language */}
        {/* Site is in English and can be converted to Portuguese BR */}
        <div>
          {/* Site is in English and with a Brazil flag */}
          {lang == "pt" ? (
            <button
              className="flex items-center h-14 px-3"
              onClick={() => changeLanguage("en")}
            >
              <img
                className="w-6"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png"
                alt="Brazil flag"
              />{" "}
            </button>
          ) : (
            <button
              className="flex items-center h-14 px-3"
              onClick={() => changeLanguage("pt")}
            >
              <img
                className="w-6"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
                alt="United State of America flag"
              />
            </button>
          )}
        </div>
      </div>

      {/* Nav menu */}
      {/* Mobile interfaces */}
      {handleMenu === true ? (
        <nav className="flex flex-col gap-4 py-2 px-4 bg-black component-padding items-center md:hidden">
          <NavLink
            to="/"
            className={({ isActive, isPeding }) =>
              isPeding ? "pending" : isActive ? "active" : ""
            }
          >
            {t("navigation.home")}
          </NavLink>
          <NavLink
            to="/daily-space-view"
            className={({ isActive, isPeding }) =>
              isPeding ? "pending" : isActive ? "active" : ""
            }
          >
            {t("navigation.daily_space_view")}
          </NavLink>
          <NavLink
            to="/space-on-your-day"
            className={({ isActive, isPeding }) =>
              isPeding ? "pending" : isActive ? "active" : ""
            }
          >
            {t("navigation.space_on_your_day")}
          </NavLink>
        </nav>
      ) : (
        ""
      )}

      {/* Nav Bar */}
      {/* To the others interfaces */}
      <nav className="hidden component-padding md:justify-evenly md:flex md:gap-6 md:bg-black ">
        <NavLink
          to="/"
          className={({ isActive, isPeding }) =>
            isPeding ? "pending" : isActive ? "active" : ""
          }
        >
          {t("navigation.home")}
        </NavLink>
        <NavLink
          to="/daily-space-view"
          className={({ isActive, isPeding }) =>
            isPeding ? "pending" : isActive ? "active" : ""
          }
        >
          {t("navigation.daily_space_view")}
        </NavLink>
        <NavLink
          to="/space-on-your-day"
          className={({ isActive, isPeding }) =>
            isPeding ? "pending" : isActive ? "active" : ""
          }
        >
          {t("navigation.space_on_your_day")}
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
