import React from "react";
import Ships from "./Ships";

function MainFormComp() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This endpoint gives data about the ships that assist SpaceX launches,
          including ASDS drone ships, tugs, fairing recovery ships, and various
          support ships.
        </p>
        <Ships />
      </header>
    </div>
  );
}

export default MainFormComp;
