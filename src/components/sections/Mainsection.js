import React from "react";
import Createpost from "../desgin-blocks/Createpost";

function Mainsection() {
  return (
    <div className="col-md-10 col-12 mainsec  py-0">
      <div className="row m-0 h-100 py-lg-4 py-2">
        <Createpost />
        <div className="col-3 bg-blacks h-100 d-lg-block d-none">a</div>
        <div className="col-2 bg-blacks h-100 d-lg-block d-none">a</div>
      </div>
    </div>
  );
}

export default Mainsection;
