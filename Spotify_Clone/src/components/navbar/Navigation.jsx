import React from "react";
import { Icon } from "../../Icons";
import { useParams } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex gap-x-4">
      <button
        onClick={() => window.history.back()}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon size={22} name="prev" />
      </button>
      <button
        onClick={() => window.history.forward()}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon size={22} name="next" />
      </button>
    </nav>
  );
}

export default Navigation;
