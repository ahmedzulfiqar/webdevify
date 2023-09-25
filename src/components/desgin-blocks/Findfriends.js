import React from "react";
import profile from "../media/me.jpg";
import Post from "./Post";
import Profile from "./Profile";
function Findfriends() {
  return (
    <div className="col-12  p-0 ">
      <div className="card bg-blacks border-0 shadow d-block ">
        <div class="card-header text-light fs-3 fw-lighta py-md-2 py-2 border-bottom border-dark border-2 d-block">
          <i class="fa-solid fa-user-group text-purple me-2" aria-hidden="true"></i> Find Friends
        </div>

        <div class="card-body d-flex d-block py-md-2 py-2  border-bottom border-dark border-2">
          <div className="d-flex w-100">
            <input
              type="text"
              className="bg-transparent ps-3 border-0 text-white w-100 fw-lighta"
              placeholder="Search"
            />
          </div>
          <div className="text-purple mt-0 d-grid pt-md-2 pb-1 ">
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
        <div className=" p-0 m-0 py-1">
          <div class="card-footer py-md-1  py-1 px-4 setfindfriends my-2">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile /> <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Findfriends;
