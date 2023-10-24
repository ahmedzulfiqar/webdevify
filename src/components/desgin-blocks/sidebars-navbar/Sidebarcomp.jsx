import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebarcomp({ open2 }) {
  const sampledata = [
    {
      head: "SOCIAL",
      list: [
        {
          head: "News Feed",
          icon: "fa-solid fa-newspaper",
          link: "/webdevify",
        },
        {
          head: "My Profile",
          icon: "fa-solid fa-user",
          link: "/webdevify/profile",
        },
        {
          head: "My Friends",
          icon: "fa-solid fa-user-group",
          link: "/webdevify/friendsprofile",
        },
        {
          head: "Notifcation",
          icon: "fa-solid fa-bell",
          link: "/webdevify/notification",
        },
        { head: "Videos", icon: "fa-solid fa-video" },
        { head: "Pictures", icon: "fa-solid fa-image" },
        { head: "Liked Posts", icon: "fa-solid fa-thumbs-up" },
        { head: "Chat", icon: "fa-solid fa-message" },
        { head: "Saved", icon: "fa-solid fa-bookmark" },
      ],
    },
  ];
  console.log(open2);
  return (
    <div
      className={` p-0 sidebar pe-md-5 ${
       open2 ? "  col-lg-1 col-md-1 " : " col-lg-2 col-md-5"
      }  `}
    >
      <div
        className={` p-0 pt-0  bg-blacks  h-100 ${
          !open2 ? "sidebardiv" : "sidebardiv2"
        }`}
      >
        <ul class="  pt-lg-3 pt-3     fw-lighta p-0 ps-3 fd">
          {sampledata.map((i) => {
            return (
              <>
                <li
                  class={" text-light py-2 px-3 mt-0 h5 ps-md-1 ps-2 fw-lighta"}
                >
                  {!open2 ? (
                    <span className="text-purple">SOCIAL</span>
                  ) : (
                    <i
                      class="fa fa-dot-circle text-purple"
                      aria-hidden="true"
                    ></i>
                  )}
                </li>
                {i.list.map((da) => {
                  return (
                    <Link
                      class="nav-link text-start text-light py-2 my-1 px-md-2 px-2 hoveri border-bottom border-dark   "
                      to={da.link}
                    >
                      <i
                        class={`${da.icon}  text-secondary fd ${
                          open2 ? "pe-5" : "pe-4"
                        }`}
                        aria-hidden="true"
                      ></i>
                      <span className="fw-lighta   ">{da.head}</span>
                    </Link>
                  );
                })}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebarcomp;
