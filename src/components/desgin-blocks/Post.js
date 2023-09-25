import React from "react";
import profile from "../media/me.jpg";
import Postbody from "./Postbody";
function Post() {
  return (
    <div className="col-12 p-0 mt-md-2 mt-1">
      <Postbody
        image={
          "https://images.unsplash.com/photo-1607888110208-d32234404f3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        }
      />
      <Postbody image={profile} />
      <Postbody image="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
      <Postbody image="https://plus.unsplash.com/premium_photo-1675804669850-a1c3b87589d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
      <Postbody image="https://images.unsplash.com/photo-1498263382026-c65d01dad017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
      <Postbody
        image={
          "https://images.unsplash.com/photo-1516444830679-7f62c77fae81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80"
        }
      />
    </div>
  );
}

export default Post;