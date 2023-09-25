import React, { useState } from "react";
import Createpost from "../desgin-blocks/Createpost";
import Post from "../desgin-blocks/Post";
import Middlecover from "../covers/Middlecover";
import Findfriends from "../desgin-blocks/Findfriends";
import Likedposts from "../desgin-blocks/Likedposts";
import Sidebarcomp from "../desgin-blocks/Sidebarcomp";
import Myfriends from "../desgin-blocks/Myfriends";
import { Outlet, Route, Routes } from "react-router-dom";
import Notifications from "../desgin-blocks/Notification";

function Mainsection({ open }) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          
          element={
            <>
              <Middlecover>
                <div className="col-xl-8 col-md-7 col-12 px-xl-5 px-md-3 px-0">
                  <div className="row m-0 p-0">
                    <Createpost />
                    <Post />
                  </div>
                </div>
                <div className="col-xl-4 col-md-5 h-100 d-md-block d-none">
                  <div className="row m-0 p-0">
                    <Findfriends />
                    <Likedposts />
                  </div>
                </div>
              </Middlecover>
              <div className="col-md-2 col-12 h-100 d-xl-block d-none p-0">
                <Outlet />
              </div>
            </>
          }
        >
          <Route path="/myfriends" element={<Myfriends />} />
          <Route path="/notification" element={<Notifications />} />
          <Route index element={<Myfriends />} />
        </Route>
        <Route
          path="/friends"
          element={
            <div className="col-12 h-100   p-0">
              <Myfriends />
            </div>
          }
        ></Route>{" "}
        <Route
          path="/notificationmob"
          element={
            <div className="col-12 p-0 h-100 ">
              <Notifications />
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default Mainsection;
