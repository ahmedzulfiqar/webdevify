import React from "react";

function Homecover({ children }) {
  return (
    <div className="row m-0 p-0 " data>
      <div className="col-12 p-0">
        <div className="row m-0 justify-content-between  p-0">{children}</div>
      </div>
    </div>
  );
}

export default Homecover;
