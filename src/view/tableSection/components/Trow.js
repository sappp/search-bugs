import React from "react";


const Trow = ({ firstName, lastName, country, bugs }) => (
  <tr>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{country}</td>
    <td>{bugs}</td>
  </tr>
);

export default Trow;
