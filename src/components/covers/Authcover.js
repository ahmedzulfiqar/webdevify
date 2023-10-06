import React from "react";

function Authcover({children}) {
  return (
    <div className="row m-0 bg-black vh-100">
      <div class="container col-lg-9 col-12 h-100 px-0">
        <div class="row d-flex justify-content-center p-0 align-items-center m-0 h-100">
          <div class="col-xl-10 col-12 p-0 ">
            <div class="card rounded-1 text-light shadow bg-black border-0">
              <div class="row m-0 justify-content-center">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authcover;
