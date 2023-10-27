import React, { useState } from "react";
import profile from "../../media/me.jpg";
function Postbodyclone({ data }) {
  return (
    <div class="card rounded-1 bg-black py-2 h-100">
      <div class="card-body fontcahnge px-md-3 px-2 pt-md-3 pt-3 pb-0">
        <div class="d-flex flex-start align-items-center mx-auto">
          <img
            class="rounded-circle p-1 mynavbarimg shadow-1-strong me-2"
            src={data.userPicturePath}
            alt="avatar"
          />
          <div>
            <h6 class="fw-lighta text-light mb-1">{data.name}</h6>
            <p class="text-purple fw-lighta small mb-0">Just Now</p>
          </div>
        </div>

        <p
          class={`mt-md-3 mt-2  mb-0 pb-0 text-light  fw-lighta text-truncate`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostru.
        </p>
        <div className="card-images2  mt-md-3 mt-3  text-center ">
          <img src={data.picturePath} alt="" className="img- rounded-1 " />
        </div>
      </div>
    </div>
  );
}

export default Postbodyclone;
