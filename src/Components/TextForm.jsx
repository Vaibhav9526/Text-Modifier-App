import React, { useState } from "react";

const TextForm = () => {
  const [value, setvalue] = useState("");
  const onchangeHandler = (e) => {
    setvalue(e.target.value);
  };
  const UpperCase = () => {
    let UpText = value.toUpperCase();
    setvalue(UpText);
  };
  const LowerCase = () => {
    let lowerTxt = value.toLowerCase();
    setvalue(lowerTxt);
  };
  const Copy = async () => {
    await navigator.clipboard.writeText(value);
    document.getElementById("copy").innerHTML = "Copied 👍";
  };
  setTimeout(() => {
    document.getElementById("copy").innerHTML = "Copy Text";
  }, 3000);
  return (
    <>
      <div className="Main">
        <h1>Text Modifier</h1>
        <textarea
          name="mytext"
          onChange={onchangeHandler}
          placeholder="Enter Your Text Here 🔥"
          value={value}
          id="textbox"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <button id="btn-1" onClick={UpperCase}>
          Click Here For Upper Case
        </button>
        <br />
        <button id="btn-2" onClick={LowerCase}>
          Click Here For Lower Case
        </button>
        <br />
        <button id="copy" onClick={Copy}>
          Copy Text
        </button>
      </div>
      <h1 id="words">Details</h1>
      <p>
        {value.split(" ").filter((element) => {
          return element.length !== 0;
        }).length + " words "}
        and {value.length} Characters
      </p>
      <h1>Preview Here</h1>
      <p>{!value ? "💀 Nothing To Preview 💀" : value}</p>
      <br />
      <h2>🔥 Created By Vaibhav 🔥</h2>
    </>
  );
};

export default TextForm;
