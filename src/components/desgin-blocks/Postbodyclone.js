import React, { useState } from "react";
import profile from "../media/me.jpg";
import Comment from "./Comment";
function Postbodyclone({ image }) {
  const [more, setmore] = useState(true);
  const [like, setlike] = useState(false);
  return (
    <div class="card bg-black mb-2 h-100">
      <div class="card-body fontcahnge px-md-3 px-2 pt-md-3 pt-3 pb-0">
        <div class="d-flex flex-start align-items-center mx-auto">
          <img
            class="rounded-1 mynavbarimg shadow-1-strong me-3"
            src={profile}
            alt="avatar"
          />
          <div>
            <h6 class="fw-bold text-light mb-1">Lily Coleman</h6>
            <p class="text-purple small mb-0">Just Now</p>
          </div>
        </div>

        <p
          class={`mt-md-3 mt-2  mb-0 pb-0 text-light  fw-lighta ${
            more && " text-truncate"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostru.
        </p>
        <b
          className="text-purple pointer  p-0 m-0 fontcahnge text-start"
          onClick={() => setmore(!more)}
        >
          {more ? "show More" : "show Less"}
        </b>
        <div className="card-images mt-md-3 mt-3  text-center ">
          <img src={image} alt="" className=" w-100 rounded-1  h-100" />
        </div>
 
    
      </div>
    </div>
  );
}

export default Postbodyclone;
