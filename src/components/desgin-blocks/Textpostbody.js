import React, { useState } from "react";
import profile from "../media/me.jpg";
import Comment from "./Comment";
import Commentreply from "./Commentreply";
function Textpostbody() {
  const [more, setmore] = useState(true);
  const [like, setlike] = useState(false);
  const [comments, setcomments] = useState(false);
  return (
    <div class="card bg-blacks mb-3">
      <div class="card-body fontcahnge px-md-3 px-2 pt-md-3 pt-3 pb-0">
        <div class="d-flex flex-start align-items-center mx-auto">
          <img
            class="rounded-1 mynavbarimg shadow-1-strong me-3"
            src={profile}
            alt="avatar"
          />
          <div>
            <h6 class="fw-bold text-light mb-1">Ahmed Zulfiqar</h6>
            <p class="text-purple small mb-0">Just Now</p>
          </div>
        </div>

        <p class={`mt-md-3 mt-2  mb-0 pb-0 text-light  fw-lighta `}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostru.
        </p>

        <div className="card-footer py-md-2 py-0">
          <div className="row m-0 p-0 justify-content-between ">
            <div className="col-md-3 col-3 p-0 d-flex  text-center pointer ">
              <div className="m-0 p-0 rotate " onClick={() => setlike(!like)}>
                <lord-icon
                  src="https://cdn.lordicon.com/qxjdtzah.json"
                  trigger="click"
                  colors={
                    like
                      ? "primary:#12a3f1,secondary:#fff"
                      : "primary:#fff,secondary:#fff"
                  }
                ></lord-icon>
              </div>
              <div className="align-self-center text-light fw-lighta ms-md-2 ms-1 my-0 p-0 ">
                {" "}
                140 <span className="d-md-inline d-none fw-lighta"> Like</span>
              </div>
            </div>
            <div
              className={`col-3 p-0 text-light fw-lighta text-center   align-self-center pointer ${
                comments && "text-purple"
              } `}
              onClick={() => setcomments(!comments)}
            >
              <i
                class={`fa-solid fa-comment sad  fs-6 me-md-2 me-1 my-0 py-0  ${
                  comments && "text-purple"
                } `}
                aria-hidden="true"
              ></i>
              <span
                className={`align-self-center fw-lighta  m-0 p-0 d-md-inline d-none`}
              >
                Comment
              </span>
            </div>
            <div className="col-3 p-0 text-light fw-lighta text-center   align-self-center pointer ">
              <i
                class="fa-solid fa-bookmark sad  fs-6 me-md-2 me-1 my-0 py-0"
                aria-hidden="true"
              ></i>
              <span className="align-self-center fw-lighta  m-0 p-0  d-md-inline d-none">
                Save
              </span>
            </div>
          </div>
        </div>
        {comments && (
          <div className="card-footer aniamtetime pt-md-2 pt-3 pb-0  px-md-0 px-1 mt-md-3  ">
            <div className="setcardfooter">
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
            <div class="card-footer border-purple   text-muted d-flex justify-content-start align-items-center px-3 my-3">
              <input
                type="text"
                class="bg-transparent border-0 fw-lighta w-100 text-light  "
                placeholder="Type message"
              />
              <a class="ms-1 text-muted" href="#!">
                <i class="fas fa-image "></i>
              </a>
              <a class="ms-3 link-info" href="#!">
                <i class="fas fa-paper-plane"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Textpostbody;
