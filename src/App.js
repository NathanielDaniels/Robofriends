import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";

const App = () => {
  return (
    <div className="tc">
      <h1 className="title green ttu f1">Robofriends</h1>
      <input
        type="text"
        placeholder="search Robots"
        className="pa2 ma2"
      ></input>
      <hr />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
