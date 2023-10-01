import React from "react";

function Birthdayprofile({ image, name, date }) {
  return (
    <div class="d-flex flex-start align-items-center mx-auto mb-4 justify-content-between">
      <div className="m-0 d-flex p-0">
        <img
          class="rounded-1 mynavbarimg shadow-1-strong me-3"
          src={image}
          alt="avatar"
        />
        <div>
          <h6 class="fw-bold text-light mb-1">{name}</h6>
          <p class="text-purple small  mb-0 fw-lighta">{date}</p>
        </div>
      </div>
      <div className="d-block">
        <i class="fa-solid fa-link"></i>
      </div>
    </div>
  );
}

export default Birthdayprofile;
