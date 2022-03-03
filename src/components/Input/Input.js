import React from "react";
import "./input.css";

function Input(props) {
  const { size = "small", ...rest } = props;
  return <input type="text" className={`input ${size}`} {...rest} />;
}

export default Input;
