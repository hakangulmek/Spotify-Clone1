import React from "react";
import { Icon } from "../Icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../stores/player";

function SongItem({ item }) {
  const dispatch = useDispatch();
  const { current, playing } = useSelector((state) => state.player);
  const updateCurrent = () => {
    dispatch(setCurrent(item));
  };
  return (
    <div className="grid">
      <NavLink
        key={item.id}
        to="/"
        className={"bg-footer p-4 rounded hover:bg-active group"}
      >
        <div className="pt-[100%] relative">
          <img
            src={item.image}
            className="rounded absolute inset-0 w-full h-full "
          />
          <button
            className="w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2  items-center justify-center hidden"
            onClick={updateCurrent}
          >
            <Icon
              name={current?.id == item.id && playing ? "pause" : "play"}
              size={16}
            />
          </button>
        </div>

        <h6 className="pt-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
          {item.title}
        </h6>
        <p className="text-sm text-link mt-1">{item.desc}</p>
      </NavLink>
    </div>
  );
}

export default SongItem;
