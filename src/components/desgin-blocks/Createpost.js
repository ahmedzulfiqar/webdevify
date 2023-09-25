import React from "react";
import profile from "../media/me.jpg";
function Createpost() {
  return (
    <div className="col-12  p-0 ">
      <div className="card bg-blacks border-0 shadow d-sm-block d-none">
        <div class="card-header text-light fs-3 fw-lighta py-md-2 py-2 border-bottom border-dark border-2 d-sm-block d-none">
          Create Post
        </div>

        <div class="card-body d-flex d-block py-md-2 py-2">
          <div className="d-flex w-100">
            <img
              src={profile}
              alt=""
              className="img-fluid rounded-circle mynavbarimg pt-0"
            />
            <input
              type="text"
              className="bg-transparent ps-3 border-0 text-light w-100 fw-lighta small"
              placeholder="Write Something"
            />
          </div>
          <div className="btn bg-purpleless text-purple mt-0 d-grid pt-md-2 pb-1 ">
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
      <div className="card bg-blacks border-0 shadow d-sm-none d-block px-1 py-2">
        <div class="card-header text-light h6 fw-lighta py-md-3 py-2 border-bottom border-dark border-2 d-sm-none d-block">
          Create Post
        </div>

        <div class="card-body d-flex d-block py-md-4 py-2">
          <div className="d-flex w-100">
            <img
              src={profile}
              alt=""
              className="img-fluid rounded-circle  pt-0"
              width={"15%"}
            />
            <input
              type="text"
              className="bg-transparent ps-3 border-0 text-white w-100  small fw-lighta"
              placeholder="Write Something"
            />
          </div>
          <div className="btn bg-purpleless text-purple mt-0 pt-1 pb-1 px-2  ">
            Post
          </div>
        </div>
        <div class="card-footer py-md-3 py-2 border-top border-dark border-2 px-1">
          <div className="d-flex p-0">
            <div className="px-1 ps-2">
              <div className="btn bg-purpleless text-purple  fw-bolder m-0 py-1 px-1 fs-6">
                <i class="fa-solid fa-image  text-success pe-1 fs-6"></i>
                Add Photo
              </div>
            </div>
            <div className="px-1 mt-sm-0">
              <div className="btn bg-purpleless text-purple fw-bolder m-0 py-1 px-1">
                <i class="fa-solid fa-face-smile  text-warning pe-1 fs-6"></i>
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
