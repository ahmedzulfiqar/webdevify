import React, { useContext, useState } from "react";
import profile from "../../media/me.jpg";
import Comment from "./Comment";
import { AuthContexter } from "../../../context/Authcontext";

function Postbody({ data, index }) {
  const [more, setmore] = useState(true);
  const [like, setlike] = useState(false);
  const [comments, setcomments] = useState(false);
  const [description, setdescription] = useState("");
  const { userData, setrender, render,api_base } = useContext(AuthContexter);
  const likepost = async () => {
    try {
      const email = userData && userData.email;
      const postId = data && data._id;
      const response = await fetch(`${api_base}/user/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, postId }),
      });
      const result = await response.json();
      setrender(render + "fvsdfd");
      console.log(result, "finally");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const unlikepost = async () => {
    try {
      const email = userData && userData.email;
      const postId = data && data._id;
      const response = await fetch(`${api_base}/user/unlike`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, postId }),
      });
      const result = await response.json();
      setrender(render + "fvsdfd");
      console.log(result, "finally");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const postcomment = async () => {
    try {
      const email = userData && userData.email;
      const postId = data && data._id;
      const response = await fetch(`${api_base}/user/postcomment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, description, postId }),
      });
      const result = await response.json();
      setrender(render + "fvsdfd");
      setdescription("");
      console.log(result, "finally");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div class="card bg-blacks mb-3">
      <div class="card-body fontcahnge px-md-3 px-2 pt-md-3 pt-3 pb-0 justify-content-center">
        <div class="d-flex flex-start align-items-center mx-auto">
          <img
            class="rounded-circle mynavbarimg shadow-1-strong me-3 "
            src={data && data.userPicturePath}
            alt="avatar"
          />
          <div>
            <h6 class="fw-lighta text-light  mb-0">
              {data?.name.toUpperCase()}
            </h6>
            <p class="text-purple fw-lighta small mb-0">Just Now</p>
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
                    src={data?.userPicturePath}
                    alt="avatar"
                  />
                  <div>
                    <h6 class="fw-bold text-light mb-1">{data?.name}</h6>
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
                        src={data?.picturePath}
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
                  {data?.description}
                </p>

                <div className="card-images mt-md-3 mt-3  text-center imgwidth">
                  <img
                    src={data?.picturePath}
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
        {data && data.description.length > 0 && (
          <>
            <p
              class={`mt-md-3 mt-2  mb-0 pb-0 text-light  fw-lighta d-md-block d-none ${
                more && " text-"
              }`}
            >
              {data?.description}
            </p>
            <p
              class={`mt-md-3 mt-2  d-md-none d-block mb-0 pb-0 text-light small fw-lighta ${
                more && " text-"
              }`}
            >
              {data?.description}
            </p>
          </>
        )}

        {data?.picturePath.length > 0 && (
          <div className="card-images mt-md-3 mt-3  text-center imgwidth mx-auto">
            <img
              src={data?.picturePath}
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
          <div className="row m-0 p-0 justify-content-start px-1 mb-2  my-0 py-0 ">
            <div className="col-lg-2 col-4 m-0 text-start p-0 ">
              <div className="btn btn-sm px-3 rounded-2 fw-lighta text-light ">
                <img
                  src="https://pluspng.com/img-png/facebook-like-png-facebook-new-like-symbol-image-38372-850.png"
                  className="kj me-2"
                  alt=""
                />
                {data?.likes.length} Likes
              </div>
            </div>
            <div className="col-md-3 col-5 m-0 text-start p-0 ">
            </div>
            <div className="col-3 m-0  text-end p-0"></div>
          </div>
          <hr className="opacity-50 m-0 mx-2 p-0 my-0 py-0 ht" />
          <div className="row m-0 p-0 justify-content-between px-lg-5 px-1  ">
            <div className="col-3 m-0 text-start p-0">
              <div
                className="btn btn-sm px-3 rounded-2 bg- text-light "
                onClick={
                  !data?.likes.includes(userData.email) ? likepost : unlikepost
                }
              >
                <i
                  class={`fa-solid fa-thumbs-up pe-2 ${
                    data?.likes.includes(userData.email)
                      ? "text-purple"
                      : "text-light"
                  } `}
                  aria-hidden="true"
                ></i>
                <span className="d-lg-inline d-none small">
                  {!data.likes.includes(userData.email) ? "Like" : "UnLike"}
                </span>
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
          <div className="card-footer border-0 aniamtetime  m-0 p-0  ">
            <div className="setcardfooter p-0 m-0 py-md-3 py-1 px-md-3 px-1">
              {userData &&
                data.comments?.map((dats) => {
                  return <Comment data={dats} />;
                })}
            </div>
            <div class="card-footer border-purple  rounded-1  text-muted d-flex justify-content-start align-items-center px-3 my-3">
              <input
                type="text"
                class="bg-transparent border-0 fw-lighta w-100 text-light  "
                placeholder="Type message"
                onChange={(e) => setdescription(e.target.value)}
                value={description}
              />

              <a class="ms-3 link-info" onClick={postcomment}>
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
