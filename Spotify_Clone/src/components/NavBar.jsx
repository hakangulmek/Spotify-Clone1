import React from "react";
import Navigation from "./navbar/Navigation";
import Auth from "./navbar/Auth";

function NavBar() {
  return (
    <div className="h-[3.75rem] flex items-center justify-between px-8 w-full">
      <Navigation />

      <Auth />
    </div>
  );
}

export default NavBar;
