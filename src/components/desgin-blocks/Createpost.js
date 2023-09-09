import React from "react";
import profile from "../media/me.jpg";
function Createpost() {
  return (
    <div className="col-lg-6 col-12  p-0 px-lg-3">
      <div className="card bg-blacks border-0 shadow">
        <div class="card-header text-light display-6 fw-lighta py-md-3 py-2 border-bottom border-dark border-2">
          Create Post
        </div>
        <div class="card-body d-flex py-md-4 py-2">
          <img
            src={profile}
            alt=""
            className="img-fluid rounded-circle mynavbarimg pt-0"
          />
          <input
            type="text"
            className="bg-transparent ps-3 border-0 text-white w-100 fw-lighta fs-6"
            placeholder="Write Something"
          />
        </div>
        <div class="card-footer py-md-3 py-2 border-top border-dark border-2">
          <div className="d-sm-flex d-block">
            <div className="px-1">
              <div className="btn bg-purpleless text-purple fw-lighta fw-bolder m-0">
                <i class="fa-solid fa-image  text-success pe-2"></i>Photo /
                Video
              </div>
            </div>
            <div className="px-1 mt-md-0 mt-1">
              <div className="btn bg-purpleless text-purple fw-lighta fw-bolder m-0">
                <i class="fa-solid fa-face-smile  text-warning pe-2"></i>Feeling
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createpost;
