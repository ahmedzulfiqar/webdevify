import React from "react";
import Createpost from "../cards/Createpost";
import About from "../cards/About";
import Photoscard from "../cards/Photoscard";
import Friendscard from "../cards/Friendscard";
import Textpostbody from "../post-components/Textpostbody";
import Postbody from "../post-components/Postbody";

function Myprofilebottom() {
  return (
    <div className="col-lg-11 col-12 p-0 mt-md-3 mt-2">
      <div className="row m-0">
        <div className="col-lg-4 col-12 p-0 pe-lg-3 p-0">
          <About />
          <Photoscard />
          <Friendscard />
        </div>
        <div className="col-lg-8 col-12 p-0">
       
        </div>
      </div>
    </div>
  );
}

export default Myprofilebottom;
