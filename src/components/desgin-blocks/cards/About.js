import React from "react";

function About() {
  return (
    <div className="card bg-blacks rounded-1 shadow px-md-0 mb-3">
      <div class="card-header text-light fs-3 fw-lighta py-md-2 py-2 ps-4 border-bottom border-dark border-2 d-block">
        <i
          class="fa-regular fa-address-card text-purple pe-3"
          aria-hidden="true"
        ></i>
        About
      </div>
      <div className="card-header py-3 pe-2">
        <div className="d-block text-muted fw-lighta w-100 py-2">
          <span className="fw-bolder text-light opacity-75">Bio - </span>
          Success in slowing economic activity I am Mern Stack Developer
        </div>
        <div className="d-block text-muted fw-lighta w-100 py-2">
          <span className="fw-bolder text-light opacity-75">Job - </span>
          Web Developer
        </div>
        <div className="d-block text-muted fw-lighta w-100 py-2">
          <span className="fw-bolder text-light opacity-75">Location -</span>
          {""} Karachi , Pakistan
        </div>
        <div className="d-block text-muted fw-lighta w-100 py-2">
          <span className="fw-bolder text-light opacity-75">Frineds -</span>
          {""} 250 Friends
        </div>
      </div>
    </div>
  );
}

export default About;
