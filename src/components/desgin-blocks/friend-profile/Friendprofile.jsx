import React from "react";
import image from "../../media/me.jpg";
import Friendslistcard from "../cards/Friendslistcard";
function Friendprofile() {
  return (
    <div className="col-12 p-0">
      <div className="row m-0">
        <div className="card shadow bg-blacks border-0 rounded-2 col-12">
          <div className="card-body row m-0 px-lg-3 px-0 justify-content-lg-start justify-content-center teans2">
            <img
              src={image}
              alt=""
              className="img-fluid  rounded-4 border-black col-3  p-0 pt-0"
            />
            <div className="display-6 text-purple  col-7  text-md-start py-4 mt-lg-0 t-2 text-center align-self-center d-block ps-md-4 ps-0">
              <div className="text-light">Ahmed Zulfiqar</div>
              <span className="small fs-2"> Friends List</span>
            </div>
          </div>
        </div>
        <div className="col-12 p-0">
          <div className="container-fluid px-0">
            <div className="row m-0 py-3">
              <Friendslistcard />
              <Friendslistcard />
              <Friendslistcard />
              <Friendslistcard />
              <Friendslistcard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friendprofile;
