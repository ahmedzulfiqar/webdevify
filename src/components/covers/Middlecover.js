import React from "react";

function Middlecover({ children }) {
  return (
    <div className="col-xl-8 col-md-10 col-12 mainsec  py-0  pe-0">
      <div className="row m-0 h-100 py-lg-4 py-2 m-0 px-0  justify-content-between px-xl-5 px-lg-2  "  >{children}</div>
    </div>
  );
}

export default Middlecover;
