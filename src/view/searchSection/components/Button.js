import React from "react";


const Button = ({ name, disabled, onclick }) => (
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" disabled={disabled}   type="button" onClick={onclick}>{name}</button>
  </div>
);

export default Button;
