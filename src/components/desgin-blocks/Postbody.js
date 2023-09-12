import React, { useState } from "react";
import profile from "../media/me.jpg";
function Postbody({image}) {
  const [more, setmore] = useState(true);

  return (
    <div class="card bg-blacks mt-3">
      <div class="card-body fontcahnge px-md-3 px-2 py-md-3 py-3">
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
          aliquip consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostru.
        </p>
        <b
          className="text-purple pointer  p-0 m-0 fontcahnge text-start"
          onClick={() => setmore(!more)}
        >
          {more ? "show More" : "show Less"}
        </b>
        <div className="card-images mt-md-3 mt-3  text-center imgwidth">
          <img
            src={image}
            alt=""
            className=" img-fluid rounded-1"
          />
        </div>

        <div class="small d-flex justify-content-start text-light fw-lighta mt-3">
          <a href="#!" class="d-flex align-items-center me-3  text-light">
            <i class="far fa-thumbs-up me-2"></i>
            <p class="mb-0">Like</p>
          </a>
          <a
            href="#!"
            class="d-flex align-items-center me-3  text-light fw-lighta"
          >
            <i class="far fa-comment-dots me-2"></i>
            <p class="mb-0">Comment</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Postbody;
