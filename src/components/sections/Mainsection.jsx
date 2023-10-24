import React, { useState } from "react";
import Createpost from "../desgin-blocks/cards/Createpost";
import Post from "../desgin-blocks/post-components/Post";
import Middlecover from "../covers/Middlecover";
import Findfriends from "../desgin-blocks/cards/Findfriends";
import Likedposts from "../desgin-blocks/cards/Likedposts";
import Myfriends from "../desgin-blocks/cards/Myfriends";
import { Outlet, Route, Routes } from "react-router-dom";
import Notifications from "../desgin-blocks/Notification";
import Myprofile from "../desgin-blocks/myprofile/Myprofile";
import Friendprofile from "../desgin-blocks/friend-profile/Friendprofile";

function Mainsection({ open }) {
  return (
    <>
      <Routes>
        {
          // main route
          <Route
            path="/webdevify"
            element={
              <>
                <Middlecover>
                  <div className="col-xl-8 col-md-7 col-12 px-xl-5 px-md-3 px-0">
                    <div className="row m-0 p-0 mainsec ">
                      <Createpost />
                      <Post />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-5 h-100 d-md-block d-none">
                    <div className="row m-0 p-0 ">
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
            <Route path="/webdevify/myfriends" element={<Myfriends />} />
            <Route path="/webdevify/notification" element={<Notifications />} />
            <Route index element={<Myfriends />} />
          </Route>
        }

        {
          // mobile route
          <>
            <Route
              path="/friends"
              element={
                <div className="col-12 h-100   p-0">
                  <Myfriends />
                </div>
              }
            ></Route>
            <Route
              path="/notificationmob"
              element={
                <div className="col-12 p-0 h-100 ">
                  <Notifications />
                </div>
              }
            ></Route>
          </>
        }
        {
          //myprofile
          <Route
            path="/webdevify/profile"
            element={
              <>
                <Middlecover>
                  <div className="col-xl-12 col-md-12 col-12 px-xl-3 px-md-3 px-0">
                    <div className="row m-0 p-0   mainsec2 ">
                      <Myprofile />
                    </div>
                  </div>
                </Middlecover>
                <div className="col-md-2 col-12 h-100 d-xl-block d-none p-0">
                  <Myfriends />
                </div>
              </>
            }
          ></Route>
        }
        {
          //frinds profile
          <Route
            path="/webdevify/friendsprofile"
            element={
              <>
                <Middlecover>
                  <div className="col-xl-12 col-md-12 col-12 px-xl-3 px-md-3 px-0">
                    <div className="row m-0 p-0   mainsec2 ">
                      <Friendprofile />
                    </div>
                  </div>
                </Middlecover>
                <div className="col-md-2 col-12 h-100 d-xl-block d-none p-0">
                  <Myfriends />
                </div>
              </>
            }
          ></Route>
        }

        <Route path="/webdevify/login" element={<>a</>}></Route>
      </Routes>
    </>
  );
}

export default Mainsection;
