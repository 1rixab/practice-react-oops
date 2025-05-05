import React from "react";
import "./petinfobox.css";

let Petinfobox = (props) => {
  return (
    <div>
      <div>
        <h3>{`${props.Id}---${props.Name}-${props.Age}-${props.Type}`}</h3>
      </div>
    </div>
  );
};
export default Petinfobox;
