import React from "react";
import Profile from "./Profile";
function Myfriends() {
  return (
    <div className="col-12 p-0">
      <div className="card border-0 rounded-0  myfriends bg-blacks shadow d-block mt-md-0">
        <div class="card-header text-light fs-3 py-md-2 py-2  rounded-0 ">
          <i
            class="fa-solid fa-user-group text-purple me-2"
            aria-hidden="true"
          ></i>{" "}
          My Friends
        </div>
    

        <div className=" p-0 m-0 py-0 mt-3">
          <div class="card-footer   py-md-1  py-1 px-4 myfriendsscrol my-1">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile /> <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile /> <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myfriends;
