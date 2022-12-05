import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function Generator() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#fff").all(10));
  const [blank,setBlank] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log(colors)
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      //console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder=""
            className={`${error ? "error" : null}`}
          />
          <button onClick={() => setBlank(!blank)} className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
{blank && (
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);

          return (
        
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
            
            )
        })}  
      </section>
)}
    </>
  );
}
export default Generator;
