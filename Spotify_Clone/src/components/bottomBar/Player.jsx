import { Icon } from "../../Icons";
import React, { useEffect, useMemo, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { useAudio } from "react-use";
import { secondToTime } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying, setSidebar } from "../../stores/player";

function player() {
  const STEP = 0.1;
  const MIN = 0;
  function createScale() {
    () => {
      let scale = [];

      for (let i = MIN; i <= MAX; i = i + STEP) {
        scale.push(
          <span key={i} className="scale_item">
            {i}
          </span>
        );
      }

      return scale;
    };
  }
  const dispatch = useDispatch();
  const { current, sideBar } = useSelector((state) => state.player);

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });
  useEffect(() => {
    controls.play();
  }, [current]);
  useEffect(() => {
    dispatch(setControls(controls));
  }, []);
  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "volumeMuted";
    if (state.volume > 0 && state.volume < 0.33) return "volumeLow";
    if (state.volume >= 0.33 && state.volume < 0.66) return "volumeNormal";
    return "volumeFull";
  }, [state.volume, state.muted]);
  return (
    <div className="flex justify-between items-center px-4 pb-3">
      <div className="min-w-[11.25rem] w-[30%]">
        {current && (
          <div className="flex items-center">
            {!sideBar && (
              <div className="flex items-center">
                <div className="w-14 h-14 mr-2">
                  <img src={current.image} />
                </div>
                <div className="mr-2">
                  <h6 className="text-sm line-clamp-1">{current.title}</h6>
                  <p className="text-[0.688rem text-white text-opacity-70">
                    {current.desc}
                  </p>
                </div>
              </div>
            )}
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="heartFilled" size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="pictureInPicture" size={16} />
            </button>
          </div>
        )}
      </div>
      <div className="max-w-[45.125rem] w-[40%] ">
        <div className=" flex flex-col items-center">
          <div className="flex items-center gap-x-2 p-2">
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="suffle" size={16} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="playerPrew" size={16} />
            </button>
            <button
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]"
              onClick={controls[state?.playing ? "pause" : "play"]}
            >
              <Icon name={state?.playing ? "pause" : "play"} size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="playerNext" size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="repeat" size={16} />
            </button>
          </div>
          <div className="flex items-center gap-x-2 w-full mt-1.5 ">
            {audio}
            <div className="text-[0.688rem] text-white text-opacity-70">
              {secondToTime(state?.time)}
            </div>
            <div className="w-full">
              <Range
                values={[state?.time]}
                step={STEP}
                min={MIN}
                max={state?.duration || 1}
                onChange={(values) => controls.seek(values[0])}
                renderTrack={({ props, children }) => {
                  return (
                    <div
                      onMouseDown={props.onMouseDown}
                      onTouchStart={props.onTouchStart}
                      className="w-full h-7 flex group"
                      style={props.style}
                    >
                      <div
                        ref={props.ref}
                        className="h-1 w-full rounded-md self-center"
                        style={{
                          borderRadius: "5px",
                          background: getTrackBackground({
                            values: [[state?.time]],
                            colors: ["#1db954", "#535353"],
                            min: MIN,
                            max: state?.duration || 1,
                          }),
                        }}
                      >
                        {children}
                        <div className="scale">{createScale}</div>
                      </div>
                    </div>
                  );
                }}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    className={`h-3 w-3 rounded-full flex justify-center items-center ${
                      !isDragged ? "opacity-0" : ""
                    } bg-slate-100   group-hover:opacity-100`}
                    style={props.style}
                  />
                )}
              />
            </div>
            <div className="text-[0.688rem] text-white text-opacity-70 ml-2">
              {secondToTime(state?.duration)}
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="lyrics" size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="queue" size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="device" size={16} />
        </button>
        <button
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
          onClick={controls[state.muted ? "unmute" : "mute"]}
        >
          <Icon name={volumeIcon} size={16} />
        </button>
        <div className="w-40">
          <Range
            values={[state?.volume]}
            step={0.01}
            min={0}
            max={1}
            onChange={(values) => {
              controls.unmute();
              controls.volume(values[0]);
            }}
            renderTrack={({ props, children }) => {
              return (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  className="w-full h-7 flex group"
                  style={props.style}
                >
                  <div
                    ref={props.ref}
                    className="h-1 w-full rounded-md self-center"
                    style={{
                      borderRadius: "5px",
                      background: getTrackBackground({
                        values: [[state.muted ? 0 : state?.volume]],
                        colors: ["#1db954", "#535353"],
                        min: 0,
                        max: 1,
                      }),
                    }}
                  >
                    {children}
                    <div className="scale">{createScale}</div>
                  </div>
                </div>
              );
            }}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                className={`h-3 w-3 rounded-full flex justify-center items-center ${
                  !isDragged ? "opacity-0" : ""
                } bg-slate-100   group-hover:opacity-100`}
                style={props.style}
              />
            )}
          />
        </div>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="fullScreen" size={16} />
        </button>
      </div>
    </div>
  );
}

export default player;
