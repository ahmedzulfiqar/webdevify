import React, { useEffect, useState } from "react";
import profile from "../media/me.jpg";
import { Link } from "react-router-dom";
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
    <div className="col-12 p-0 m-0">
      <nav
        class={`navbar mynavbar navbar-expand-sm bg-blacks text-light px-md-3 px-1 shadow ${
          !Scrolled ? "py-md-4 pb-md-4 py-3 pb-0" : "py-md-4 pb-md-4 py-3 pb-0"
        }`}
      >
        <div class="container-fluid">
          <a
            class="display-6 text-purple fw-bolder d-md-block d-none "
            href="#"
          >
            <i class="fa-brands fa-slack px-2"></i>
            Webdevify
          </a>
          <a
            class="display-6 text-purple fw-bolder  d-md-none d-block "
            href="#"
            onClick={() => setopen(!open)}
          >
            <i
              class={
                open
                  ? "fa-brands fa-slack px-2 fa-rotate-90 setwi"
                  : "fa-solid fa-xmark px-2 setwi"
              }
            ></i>
            Webdevify
          </a>
          <div class=" justify-content-end algin-self-center ms-auto me-5 pre ">
            <ul class="navbar-nav d-md-flex d-none">
              <li class="nav-item mx-md-3">
                <Link
                  class="fa fa-home text-purple "
                  aria-hidden="true"
                  to={"/"}
                ></Link>
              </li>
              <li class="nav-item mx-md-3">
                <Link
                  class="fa-solid fa-user-group text-purple "
                  to={"/myfriends"}
                ></Link>
              </li>
              <li class="nav-item mx-md-3">
                <Link
                  class="fa-solid fa-bell text-purple "
                  to={"/notification"}
                ></Link>
              </li>
              <li class="nav-item mx-md-3">
                <i class="fa fa-envelope text-purple "></i>
              </li>
            </ul>
          </div>
          <img
            src={profile}
            alt=""
            className="img-fluid rounded-circle mynavbarimg pt-0"
          />
      
          <div className="ms-md-3 d-md-block d-none"> Ahmed Zulfiqar</div>
        </div>
        <div class="d-md-none d-block mt-3 w-100 bg-black py-3">
          <div className="row m-0 justify-content-between px-3">
            <Link to={"/"} className=" col-2 fa fa-home text-purple"></Link>
            <Link
              to={"/friends"}
              class="fa-solid fa-user-group text-purple col-2"
            ></Link>
            <Link
              to={"/notificationmob"}
              class="fa-solid fa-bell text-purple col-2 "
            ></Link>
            <Link class="fa fa-envelope text-purple  col-2"></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
