import React from "react";


const Input = ({ waterMark, error, onChange }) => (
  <input
    type="text"
    className={`form-control ${error ? "is-invalid" : ''}`}
    placeholder={waterMark}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default Input;
