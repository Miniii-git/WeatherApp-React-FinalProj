import React from "react";
import "./Icons.css";

export default function Icons(props) {
  return (
    <div className="Icons">
      <img src={props.url} alt="w" width={props.size} />
    </div>
  );
}
