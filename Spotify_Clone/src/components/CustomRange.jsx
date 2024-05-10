import React from "react";
import { Range, getTrackBackground } from "react-range";

function CustomRange({ value, step, min, max, onChange }) {
  function player() {
    const STEP = 0.1;
    const MIN = 0;
  }
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
  return (
    <div>
      <Range
        values={[value]}
        step={step}
        min={min}
        max={max}
        onChange={onChange}
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
                    values: [value],
                    colors: ["#1db954", "#535353"],
                    min,
                    max,
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
  );
}

export default CustomRange;
