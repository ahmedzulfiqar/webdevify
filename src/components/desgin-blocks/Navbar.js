import React, { useEffect, useState } from "react";

function Navbar({ setopen, open }) {
  const [Scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="col-12 p-0">
      <nav
        class={`navbar mynavbar navbar-expand-sm bg-blacks text-light fixed-top px-md-3 px-1 shadow ${
          !Scrolled ? "py-4 pb-md-4 pb-0" : "py-3 pb-md-3 pb-0"
        }`}
      >
        <div class="container-fluid">
          {" "}
          <div
            class=" justify-content-end algin-self-center setwi me-3 "
            onClick={() => setopen(!open)}
          >
            <i
              class={
                open
                  ? "fa-solid fa-bars fa-rotate-90 display-6"
                  : "fa-solid fa-xmark  display-6"
              }
            ></i>
          </div>
          <a class="display-6 text-purple fw-bolder" href="#">
            <i class="fa-brands fa-slack px-2"></i>
            Webdevify
          </a>
          <div class=" justify-content-end algin-self-center ms-auto me-5 d-md-block d-none">
            <ul class="navbar-nav">
              <li class="nav-item mx-md-3">
                <i class="fa fa-home text-purple " aria-hidden="true"></i>
              </li>
              <li class="nav-item mx-md-3">
                <i class="fa-solid fa-user-group text-purple "></i>
              </li>
              <li class="nav-item mx-md-3">
                <i class="fa-solid fa-bell text-purple "></i>
              </li>
              <li class="nav-item mx-md-3">
                <i class="fa fa-envelope text-purple "></i>
              </li>
            </ul>
          </div>
          <img
            src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/1.jpg"
            alt=""
            className="img-fluid rounded-circle mynavbarimg pt-0"
          />
          <div className="ms-md-2 d-md-block d-none"> Ahmed Zulfiqar</div>
        </div>
        <div class="d-md-none d-block mt-3 w-100 bg-black py-3">
          <div className="row m-0 justify-content-between px-3">
            <i class="fa fa-home text-purple col-2" aria-hidden="true"></i>
            <i class="fa-solid fa-user-group text-purple col-2"></i>
            <i class="fa-solid fa-bell text-purple col-2 "></i>
            <i class="fa fa-envelope text-purple  col-2"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
