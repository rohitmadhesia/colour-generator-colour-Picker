import React from "react";
import { PhotoshopPicker } from "react-color";
import { useState } from "react";

function Picker() {
  const [color, setColor] = useState("#D0B6B6");
  const [hidden, setHidden] = useState(false);
  const pickerStyles = {
    default: {
      picker: {
        position: "absolute",
        bottom: "30px",
        left: "100px"
      }
    }
  };
  return (
    <div style={{ background: color }} className="picker">
      <div className="cntner">
        {hidden && (
          <PhotoshopPicker
            styles={pickerStyles}
            color={color}
            onChange={(updateColor) => setColor(updateColor.hex)}
          />
        )}
        <button onClick={() => setHidden(!hidden)} className="pick-btn">
          {hidden ? "close the picker" : "open the picker"}
        </button>
      </div>
    </div>
  );
}

export default Picker;
