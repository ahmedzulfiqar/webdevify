import React from "react";
import profile from "../media/me.jpg";
function Comment() {
  return (
    <div class="d-flex flex-start   mb-md-3 mb-4 ">
      <img
        class="rounded-1 mynavbarimg shadow-1-strong me-3 "
        src={profile}
        alt="avatar"
      />
      <div className="d-md-block d-none ">
        <div className="d-flex m-0 p-0 ">
          <h6 class=" text-light mb-1 ">
            Lily Coleman{" "}
            <span class="text-purple fw-lighta small mb-0">- Just Now</span>
          </h6>
        </div>
        <p className="text-light fw-lighta muted mb-0 px-0 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page
        </p>
        <div className="d-flex p-0 m-0 mt-2">
          <div className=" text-purple me-md-2 me-1">Like</div>
          <div className="text-purple ms-md-2 ms-1">Reply</div>
        </div>
      </div>{" "}
      <div className="d-md-none d-block ">
        <div className="d-flex m-0 p-0 ">
          <h6 class=" text-light mb-1 small ">
            Lily Coleman{" "}
            <span class="text-purple fw-lighta small mb-0">- Just Now</span>
          </h6>
        </div>
        <p className="text-light fw-lighta muted mb-0 px-0 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page
        </p>
        <div className="d-flex p-0 m-0 mt-2">
          <div className=" text-purple me-md-2 me-1 small">Like</div>
          <div className="text-purple ms-md-2 ms-1 small">Reply</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
