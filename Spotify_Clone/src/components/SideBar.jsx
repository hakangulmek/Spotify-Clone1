import React from "react";
import logo from "../image/logo.svg";
import Menu from "./sidebar/Menu";
import { Icon } from "../Icons";
import PlayList from "./sidebar/PlayList";
import DowloadApp from "./sidebar/DowloadApp";

function SideBar() {
  return (
    <aside className="w-60 pt-6 flex-shrink-0 flex flex-col">
      <a href="#" className="mb-5 px-6">
        <img src={logo} alt="" className="h-10" />
      </a>
      <Menu />
      <nav>
        <ul>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex text-link group font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 group hover:bg-opacity-100 bg-white rounded-sm text-black">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex text-link font-semibold group hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-indigo-300 text-white rounded-sm to-blue-300 opacity-60 group hover:opacity-100">
                <Icon name="heart" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <PlayList />
      <DowloadApp />
    </aside>
  );
}

export default SideBar;
