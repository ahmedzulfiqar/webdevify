import React, { useState } from "react";
import profile from "../../media/me.jpg";
import Comment from "./Comment";

function Postbody({ data, index }) {
  const [more, setmore] = useState(true);
  const [like, setlike] = useState(false);
  const [comments, setcomments] = useState(false);

  return (
    <div class="card bg-blacks mb-3">
      <div class="card-body fontcahnge px-md-3 px-2 pt-md-3 pt-3 pb-0 justify-content-center">
        <div class="d-flex flex-start align-items-center mx-auto">
          <img
            class="rounded-1 mynavbarimg shadow-1-strong me-3 "
            src={data.userPicturePath}
            alt="avatar"
          />
          <div>
            <h6 class="fw-bold text-light mb-1">{data.name}</h6>
            <p class="text-purple small mb-0">Just Now</p>
          </div>
        </div>
        <div
          class="modal fade"
          id={`exampleModal${index}`}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="card bg-black mb-3">
              <div class="card-body fontcahnge px-md-3 px-2 py-md-3 py-3 ">
                <div class="d-flex flex-start align-items-center mx-auto">
                  <img
                    class="rounded-1 mynavbarimg shadow-1-strong me-3 "
                    src={data.userPicturePath}
                    alt="avatar"
                  />
                  <div>
                    <h6 class="fw-bold text-light mb-1">{data.name}</h6>
                    <p class="text-purple small mb-0">Just Now</p>
                  </div>
                </div>
                <div
                  class="modal fade"
                  id={`exampleModal${index}`}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div className="card-images mt-md-3 mt-3  text-center imgwidth">
                      <img
                        src={data.picturePath}
                        alt=""
                        className=" img-fluid rounded-1"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal${index}`}
                      />
                    </div>
                  </div>
                </div>
                <p class={`mt-md-3 mt-2  mb-0 pb-0 text-light  fw-lighta `}>
                  {data.description}
                </p>

                <div className="card-images mt-md-3 mt-3  text-center imgwidth">
                  <img
                    src={data.picturePath}
                    alt=""
                    className=" img-fluid rounded-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal${index}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {data.description.length > 0 && (
          <p
            class={`mt-md-3 mt-2  mb-0 pb-0 text-light  fw-lighta ${
              more && " text-"
            }`}
          >
            {data.description}
          </p>
        )}

        {data.picturePath.length > 0 && (
          <div className="card-images mt-md-3 mt-3  text-center imgwidth mx-auto">
            <img
              src={data.picturePath}
              alt=""
              className=" img-fluid rounded-1 ms-auto shadow"
              type="button"
              loading="lazy"
              data-bs-toggle="modal"
              data-bs-target={`#exampleModal${index}`}
            />
          </div>
        )}
        <div className="card-footer py-md-2 py-0  px-0">
          <div className="row m-0 p-0 justify-content-between px-lg-5 px-1  ">
            <div className="col-3 m-0 text-start p-0">
              <div className="btn btn-sm px-3 rounded-2 bg- text-light ">
                <i
                  class="fa-solid fa-thumbs-up text-light pe-2"
                  aria-hidden="true"
                ></i>
                <span className="d-lg-inline d-none">Like</span>
              </div>
            </div>
            <div className="col-3 m-0 p-0 text-center">
              <div
                className="btn btn-sm px-3 rounded-2 bg- text-light "
                onClick={() => setcomments(!comments)}
              >
                <i
                  class={`fa-solid fa-comment pe-2 ${
                    comments ? "text-purple" : "text-light"
                  }`}
                  aria-hidden="true"
                ></i>
                <span className="d-lg-inline d-none">Comment</span>
              </div>
            </div>
            <div className="col-3 m-0  text-end p-0">
              <div className="btn btn-sm px-3 rounded-2 bg- text-light ">
                <i
                  class="fa-solid fa-save text-light pe-2"
                  aria-hidden="true"
                ></i>
                <span className="d-lg-inline d-none">Save</span>
              </div>
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

export default Postbody;
