import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "5px solid gray",
        height: "calc(100vh - 200px)"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
