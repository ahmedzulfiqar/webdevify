import React, { useState } from "react";
import profile from "../media/me.jpg";
function Post() {
  const [more, setmore] = useState(true);
  return (
    <div className="col-12 p-0 mt-md-3 mt-2">
      <div class="card bg-blacks">
        <div class="card-body fontcahnge px-md-3 px-0 ps-1">
          <div class="d-flex flex-start align-items-center">
            <img
              class="rounded-circle shadow-1-strong me-3"
              src={profile}
              alt="avatar"
              width="60"
              height="60"
            />
            <div>
              <h6 class="fw-bold text-light mb-1">Lily Coleman</h6>
              <p class="text-purple small mb-0">Just Now</p>
            </div>
          </div>

          <p
            class={`mt-md-3 mt-1 mb-0 pb-0 text-light  fw-lighta ${
              more && " text-truncate"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip consequat.
          </p>
          <b
            className="text-purple pointer btn p-0 m-0 fontcahnge"
            onClick={() => setmore(!more)}
          >
            {more ? "Show More" : "Show Less"}
          </b>
          <hr className="border-purple my-md-4 my-2"/>
          <div className="card-images">
            <img
              src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/p2.jpg"
              alt=""
              className="img-fluid h-50 w-100w"
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
    </div>
  );
}

export default Post;

