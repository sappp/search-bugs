import React from "react";

import Trow from './components/Trow';


const TableSection = ({ list, onSort }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">First Name</th>
        <th scope="col" style={{ "cursor": "pointer"}} onClick={() => onSort('lastName')}>Last Name</th>
        <th scope="col" style={{ "cursor": "pointer" }} onClick={() => onSort('country')}>Country</th>
        <th scope="col">Bugs</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map(l => (
          <Trow
            key={l.firstName + l.lastName}
            firstName={l.firstName}
            lastName={l.lastName}
            country={l.country}
            bugs={l.bugs}
          />
        ))
      }
    </tbody>
  </table>
);

export default TableSection;
