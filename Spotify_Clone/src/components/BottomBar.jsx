import React from "react";
import Player from "./bottomBar/Player";

function BottomBar() {
  return (
    <div className="h-24 bg-footer border-t border-white border-opacity-5">
      <Player />
    </div>
  );
}

export default BottomBar;
