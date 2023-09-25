import React from "react";
import Profile from "./Profile";
function Notifications() {
  return (
    <div className="col-12 p-0">
      <div className="card border-0 rounded-0  myfriends bg-blacks shadow d-block">
        <div class="card-header text-light fs-3  py-md-2 py-2 border-bottom border-dark border-2 bg-purpleless rounded-0">
          <i class="fa-solid fa-bell text-purple  me-2" aria-hidden="true"></i>{" "}
          Notification
        </div>

        <div className=" p-0 m-0 py-1 mt-2">
          <div class="card-footer   py-md-1  py-1 px-4 myfriendsscrol my-2">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
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

export default Notifications;
