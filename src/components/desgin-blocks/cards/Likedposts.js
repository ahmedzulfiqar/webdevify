import React from "react";
import Postbodyclone from "../post-components/Postbodyclone";
function Likedposts() {
  return (
    <div className="col-12  p-0 mt-2 ">
      <div className="card bg-blacks shadow d-block  ">
        <div class="card-header text-light fs-3 fw-lighta py-md-2 py-0 border-bottom border-dark border-2 d-block ">
          <i
            class="fa-solid fa-fire text-purple me-2"
            aria-hidden="true"
          ></i>{" "}
          Popular Posts
        </div>
        <div className=" p-0 m-0 py-3 ">
          <div class="card-footer py-md-1   px-2   setfindfriends2">
            <Postbodyclone
              image={
                "https://images.unsplash.com/photo-1516444830679-7f62c77fae81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80"
              }
            />{" "}
            <Postbodyclone image="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
            <Postbodyclone image="https://plus.unsplash.com/premium_photo-1675804669850-a1c3b87589d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
            <Postbodyclone image="https://images.unsplash.com/photo-1498263382026-c65d01dad017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Likedposts;
