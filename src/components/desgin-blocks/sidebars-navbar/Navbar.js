import React, { useEffect, useState } from "react";
import profile from "../../media/me.jpg";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
function Navbar({ setopen2, open2, settheme }) {
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="col-12 p-0 m-0">
      <nav
        class={`navbar mynavbar navbar-expand-sm bg-blacks text-light px-md-3 px-1 shadow ${
          !Scrolled ? "py-md-4 pb-md-4 py-3 pb-0" : "py-md-4 pb-md-4 py-3 pb-0"
        }`}
      >
        <div class="container-fluid">
          <a
            class="display-6 text-purple fw-bolder d-xl-block d-none "
            href="#"
          >
            <i class="fa-brands fa-slack px-2"></i>
            Webdevify
          </a>
          <a
            class="display-6 text-purple fw-bolder  d-xl-none d-block "
            href="#"
            onClick={() => setopen2(!open2)}
          >
            <i class={"fa-brands fa-slack pe-2 "}></i>
            Webdevify
          </a>
          <div class=" justify-content-end algin-self-center ms-auto me-5 pre ">
            <ul class="navbar-nav d-md-flex d-none">
              <li class="nav-item mx-md-3">
                <Link
                  class="fa fa-home text-purple "
                  aria-hidden="true"
                  to={"/webdevify"}
                ></Link>
              </li>
              <li class="nav-item mx-md-3">
                <i class="fa fa-video text-purple "></i>
              </li>
              <li class="nav-item mx-md-3">
                <Link
                  class="fa-solid fa-user-group text-purple "
                  to={"/webdevify/myfriends"}
                ></Link>
              </li>
              <li class="nav-item mx-md-3">
                <Link
                  class="fa-solid fa-bell text-purple "
                  to={"/webdevify/notification"}
                ></Link>
              </li>
            </ul>
          </div>

          <Button
            aria-describedby={id}
            className="bg-transparent"
            onClick={handleClick}
          >
            <img
              src={profile}
              alt=""
              className="img-fluid rounded-circle mynavbarimg pt-0"
            />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            className="bg-transparent shadow-0 border-0"
          >
            <Typography className="text-light text-start rounded-0 bg-blacks  ">
              <ul class="pt-lg-4 pt-1 fw-lighta p-0 fd ds ">
                <li
                  class={
                    " text-light py-2 pb-3 px-3 mt-0 h5 ps-md-3 ps-3 fw-lighta mb-3 m-0 border-bottom border-secondary border-opacity-50 "
                  }
                >
                  <span className="text-purple">HI Ahmed Zulfiqar</span>
                </li>
                <Link
                  class="text-start text-light py-0 px-md-2 px-2 m-0 fw-lighta hoveri  ps-md-3 ps-3 "
                  to={"/webdevify/profile"}
                >
                  <i
                    class={`fa-solid fa-user  muted pe-3`}
                    aria-hidden="true"
                  ></i>
                  <span className="fw-lighta">My Profile</span>
                </Link>
                <hr className="p-0  border-opacity-25" />

                <li class="text-start text-light py-0 px-md-2 px-2 m-0 fw-lighta hoveri  ps-md-3 ps-3  ">
                  <i
                    class={`fa-solid fa-pen-to-square  muted pe-3`}
                    aria-hidden="true"
                  ></i>
                  <span className="fw-lighta">Edit Profile</span>
                </li>
                <hr className="p-0   opacity-25" />

                <li class="text-start text-light py-0 px-md-2 px-2 m-0 fw-lighta hoveri pt-0  ps-md-3 ps-3 ">
                  <i
                    class={`fa-solid fa-right-from-bracket  muted pe-3`}
                    aria-hidden="true"
                  ></i>
                  <span className="fw-lighta">Sign Out</span>
                </li>
                <hr className="p-0   opacity-25" />
                <li class="text-start text-light py-0 pb-3 px-md-2 px-2 m-0 fw-lighta hoveri pt-0  ps-md-3 ps-3">
                  <div className="d-flex w-100 justify-content-between">
                    <div
                      className="btn small text-light"
                      onClick={() => settheme("purple")}
                      style={{ backgroundColor: "#8755f2" }}
                    >
                      Purple
                    </div>
                    <div
                      className="btn b small text-light"
                      onClick={() => settheme("blue")}
                      style={{ backgroundColor: "#0a66c2" }}
                    >
                      Blue
                    </div>
                    <div
                      onClick={() => settheme("green")}
                      className="btn b small text-light"
                      style={{ backgroundColor: "#00b75a" }}
                    >
                      Green
                    </div>
                    <div
                      onClick={() => settheme("red")}
                      className="btn b small text-light"
                      style={{ backgroundColor: "#b22222" }}
                    >
                      Red
                    </div>
                  </div>
                </li>
              </ul>
            </Typography>
          </Popover>
          <div className="ms-md-3 d-md-block d-none"> Ahmed Zulfiqar</div>
        </div>
        <div class="d-md-none d-block mt-2 w-100 bg-black py-3">
          <div className="row m-0 justify-content-between px-3">
            <Link
              to={"/webdevify"}
              className=" col-2 fa fa-home text-purple"
            ></Link>
            <Link class="fa fa-video text-purple  col-2"></Link>
            <Link
              to={"/friends"}
              class="fa-solid fa-user-group text-purple col-2"
            ></Link>
            <Link
              to={"/notificationmob"}
              class="fa-solid fa-bell text-purple col-2 "
            ></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;