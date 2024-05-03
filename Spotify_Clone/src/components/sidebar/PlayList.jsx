import React from "react";

function PlayList() {
  return (
    <nav className="mx-6 mt-4 flex-auto border-t border-white border-opacity-20 overflow-auto">
      <ul>
        {new Array(40).fill(
          <li>
            <a
              href="#"
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
              22.Çalma Listem
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default PlayList;
