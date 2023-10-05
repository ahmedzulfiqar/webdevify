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
          <Createpost />
          <Postbody
            index={11}
            image="https://plus.unsplash.com/premium_photo-1675804669850-a1c3b87589d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          <Textpostbody />{" "}
          <Postbody
            index={11}
            image="https://plus.unsplash.com/premium_photo-1675804669850-a1c3b87589d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          <Textpostbody />
        </div>
      </div>
    </div>
  );
}

export default Myprofilebottom;
