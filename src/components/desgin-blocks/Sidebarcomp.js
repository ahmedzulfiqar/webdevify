import React, { useState } from "react";

function Sidebarcomp({ open }) {
  const sampledata = [
    {
      head: "SOCIAL",
      list: [
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
      ],
    },
    {
      head: "SOCIAL",
      list: [
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
      ],
    },
    {
      head: "SOCIAL",
      list: [
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
      ],
    },
    {
      head: "SOCIAL",
      list: [
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
        { head: "News Feed", para: {} },
      ],
    },
  ];
  console.log(open);
  return (
    <div className=" p-0 sidebar pe-5 ">
      <div
        className={` p-0 pt-2  bg-blacks me-5 ${
          !open ? "sidebardiv" : "sidebardiv2"
        }`}
      >
        <ul class="  pt-lg-3 pt-5   h-100  fw-lighta p-0 ps-3 fd">
          {sampledata.map((i) => {
            return (
              <>
                <li class={" text-light py-2 px-3 mt-3 h5 ps-md-1 ps-1 fw-lighta  "}>
                  {!open ? (
                    "SOCIAL"
                  ) : (
                    <i class="fa fa-dot-circle text-purple" aria-hidden="true"></i>
                  )}
                </li>
                {i.list.map(() => {
                  return (
                    <li class="text-start muted py-2 px-md-2 px-1 fw-lighta">
                      <i
                        class={`fa fa-newspaper  muted ${
                          open ? "pe-5" : "pe-4"
                        }`}
                        aria-hidden="true"
                      ></i>
                      <span className="fw-lighta  muted ">News Feed</span>
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
