import React from "react";
import Cols from './Column/HeaderCols'
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <Cols>Flight No</Cols>
        <Cols>Landed (UTC)</Cols>
        <Cols>Location</Cols>
        <Cols>Mission</Cols>
        <Cols>Orbit</Cols>
        <Cols>Launch Status</Cols>
        <Cols>Rocket</Cols>
      </tr>
    </thead>
  );
};

export default TableHeader;