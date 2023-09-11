import React, { useState } from "react";

function Sidebarcomp({ open }) {
  const sampledata = [
    {
      head: "SOCIAL",
      list: [
        { head: "News Feed", icon: "fa-solid fa-newspaper" },
        { head: "Profile", icon: "fa-solid fa-user" },
        { head: "Friends", icon: "fa-solid fa-user-group" },
        { head: "Notifcation", icon: "fa-solid fa-bell" },
        { head: "Videos", icon: "fa-solid fa-video" },
        { head: "Pictures", icon: "fa-solid fa-image" },
        { head: "Liked Posts", icon: "fa-solid fa-thumbs-up" },
        { head: "Chat", icon: "fa-solid fa-message" },
        { head: "Saved", icon: "fa-solid fa-bookmark" },
      ],
    },
  ];
  console.log(open);
  return (
    <div className=" p-0 sidebar pe-md-5 col-lg-2 col-md-5  ">
      <div
        className={` p-0 pt-0  bg-blacks  h-100 ${
          !open ? "sidebardiv" : "sidebardiv2"
        }`}
      >
        <ul class="  pt-lg-3 pt-3     fw-lighta p-0 ps-3 fd">
          {sampledata.map((i) => {
            return (
              <>
                <li
                  class={" text-light py-2 px-3 mt-0 h5 ps-md-1 ps-2 fw-lighta"}
                >
                  {!open ? (
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
                    <li class="text-start muted py-2 px-md-2 px-2 fw-lighta hoveri">
                      <i
                        class={`${da.icon}  muted ${open ? "pe-5" : "pe-4"}`}
                        aria-hidden="true"
                      ></i>
                      <span className="fw-lighta  muted ">{da.head}</span>
                    </li>
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
