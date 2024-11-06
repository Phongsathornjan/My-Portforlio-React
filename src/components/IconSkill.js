import React from "react";

export const IconSkill = (props) => {
  return (
    <center>
      <div
        className="rounded-circle bg-light"
        id="icon-hover"
        style={{ width: "55px", height: "55px"}}
      >
        <center>
          <img
            src={props.path}
            style={{ marginTop: "9px", maxWidth: "70%", maxHeight: "70%" }}
            alt={props.alt}
          />
        </center>
      </div>
    </center>
  );
};
