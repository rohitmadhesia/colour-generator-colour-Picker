import React, { useState } from "react";
import Picker from "./Picker";
import Generator from "./Generator";

function App() {
  const [pick, setPick] = useState(false);
  const [click, setClick] = useState(false);

  const handlePicker = () => {
    setClick(!click);
    setPick(false);
  };
  const handleGenerator = () => {
    setPick(!pick);
    setClick(false);
  };

  return (
    <>
      <div>
      <h2 style={{ padding: "20px" }}>SetColors</h2>
        <div className="home">
          <button onClick={() => handleGenerator()} className="gen-btn">
            {pick ? "Close the Generator" : "Open the Generator"}
          </button>

          <button onClick={() => handlePicker()} className="p-btn">
            {click ? "Close the picker" : "Open the Picker"}
          </button>
        </div>

        {pick && <Generator />}
        {click && <Picker />}
      </div>
    </>
  );
}

export default App;

