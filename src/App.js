import React, { useState } from "react";
import Picker from "./Picker";
import Generator from "./Generator";

function App() {
  const [pick, setPick] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <>
      <div>
        <div className="home">
          <button onClick={() => setPick(!pick)} className="gen-btn">
            {pick ? "Close the Generator" : "Open the Generator"}
          </button>

          <button onClick={() => setClick(!click)} className="p-btn">
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

