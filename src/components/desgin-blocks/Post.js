import React from "react";
import profile from "../media/me.jpg";
function Post() {
  return (
    <div className="col-12 p-0 mt-md-3 mt-2">
      <div class="card bg-blacks">
        <div class="card-body">
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

          <p class="mt-3 mb-4 pb-2 text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip consequat.
          </p>

          <div class="small d-flex justify-content-start">
            <a href="#!" class="d-flex align-items-center me-3">
              <i class="far fa-thumbs-up me-2"></i>
              <p class="mb-0">Like</p>
            </a>
            <a href="#!" class="d-flex align-items-center me-3">
              <i class="far fa-comment-dots me-2"></i>
              <p class="mb-0">Comment</p>
            </a>
            <a href="#!" class="d-flex align-items-center me-3">
              <i class="fas fa-share me-2"></i>
              <p class="mb-0">Share</p>
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Post;
