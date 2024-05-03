import React from "react";
import { Icon } from "../../Icons";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/"
            className="h-10 flex items-center text-sm font-semibold gap-x-4 text-link rounded hover:text-white px-4  bg-active"
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Search"
            className="h-10 flex items-center text-sm font-semibold  gap-x-4 text-link rounded hover:text-white px-4"
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Collection"
            className="h-10 flex items-center text-sm font-semibold gap-x-4   text-link rounded hover:text-white px-4"
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
