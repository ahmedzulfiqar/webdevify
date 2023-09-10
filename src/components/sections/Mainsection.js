import React from "react";
import Createpost from "../desgin-blocks/Createpost";
import Post from "../desgin-blocks/Post";
import Middlecover from "../covers/Middlecover";

function Mainsection() {
  return (
    <Middlecover>
      <div className="col-lg-6 col-12  p-0 px-lg-3">
        <div className="row m-0">
          <Createpost />
          <Post />
        </div>
      </div>
      <div className="col-3 bg-blacks h-100 d-lg-block d-none">a</div>
      <div className="col-2 bg-blacks h-100 d-lg-block d-none">a</div>
    </Middlecover>
  );
}

export default Mainsection;
