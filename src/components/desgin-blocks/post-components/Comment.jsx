import React, { useState } from "react";
import profile from "../../media/me.jpg";
import Commentreply from "./Commentreply";
function Comment({ data }) {
  const [showreply, setshowreply] = useState(false);

  return (
    <>
      <div class="d-flex comment flex-start ps-md-2  border-bottom border-dark pb-2 mb-3  ">
        <img
          class="rounded-3 mynavbarimg shadow-1-strong me-3 p-1 "
          src={data.user.picturePath}
          alt="avatar"
        />
        <div className="d-block  ">
          <div className="d-flex m-0 p-0 ">
            <h6 class=" text-light fw-lighta  mb-1">
              {data.user.name.toUpperCase()}
              <span class="text-purple fw-lighta small mb-0">
                {" "}
                &nbsp;- Just Now
              </span>
            </h6>
          </div>
          <p className="text-light fw-lighta small muted mb-0 px-0 ">
            {data.description}
          </p>
          <div className="d-flex p-0 m-0 mt-1">
            <div className=" text-purple me-md-2 me-1 fw-lighta">Like</div>
            <div className=" text-purple ms-md-2 me-1 fw-lighta">Reply</div>
          </div>
        </div>{" "}
      </div>
      {showreply && (
        <>
          <Commentreply />
          <Commentreply />
        </>
      )}
    </>
  );
}

export default Comment;
