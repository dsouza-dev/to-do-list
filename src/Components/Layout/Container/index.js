import React from "react";
import "./styles.css";

const Container = (props) => {
  return (
    <div>
      <h1 className="title">To do list</h1>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Container;
