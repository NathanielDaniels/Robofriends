import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

const App = () => {
  return (
    <div className="tc">
      <h1 className="title green ttu f1">Robofriends</h1>
      <SearchBox />
      <hr />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
