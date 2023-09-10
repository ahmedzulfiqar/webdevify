import React from "react";
import profile from "../media/me.jpg";
function Createpost() {
  return (
    <div className="col-12  p-0 ">
      <div className="card bg-blacks border-0 shadow">
        <div class="card-header text-light display-6 fw-lighta py-md-3 py-2 border-bottom border-dark border-2">
          Create Post
        </div>
        <div class="card-body d-sm-flex d-block py-md-4 py-2">
          <div className="d-flex w-100">
            <img
              src={profile}
              alt=""
              className="img-fluid rounded-circle mynavbarimg pt-0"
            />
            <input
              type="text"
              className="bg-transparent ps-3 border-0 text-white w-100  fs-6"
              placeholder="Write Something"
            />
          </div>
          <div className="btn bg-purpleless text-purple mt-sm-0 mt-2 d-grid pt-sm-2 pb-sm-0 py-0">
            POST
          </div>
        </div>
        <div class="card-footer py-md-3 py-2 border-top border-dark border-2 px-1">
          <div className="d-flex p-0">
            <div className="px-1">
              <div className="btn bg-purpleless text-purple fw-lighta fw-bolder m-0 px-md-1 px-0 pe-1">
                <i class="fa-solid fa-image  text-success pe-md-2 pe-1 ps-1"></i>
                Add Photo
              </div>
            </div>
            <div className="px-1 mt-sm-0">
              <div className="btn bg-purpleless text-purple fw-lighta fw-bolder m-0 px-md-1 px-0 pe-1">
                <i class="fa-solid fa-face-smile  text-warning pe-md-2 pe-1 ps-1"></i>
                Feeling
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createpost;
