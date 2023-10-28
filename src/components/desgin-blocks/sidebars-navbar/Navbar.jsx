import React, { useContext, useEffect, useState } from "react";
import profile from "../../media/me.jpg";
import { Link, useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AuthContexter } from "../../../context/Authcontext";
import { motion } from "framer-motion";
function Navbar({ setopen2, open2, settheme }) {
  const [Scrolled, setScrolled] = useState(false);
  const { userData, setrender, render } = useContext(AuthContexter);
  const [data, setdata] = useState();
  const [open, setopen] = useState([]);
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
  useEffect(() => {
    const fetcher = async () => {
      const datas = (await userData) && userData;
      setdata(datas);
    };
    fetcher();
  }, []);

  const signout = () => {
    localStorage.removeItem("jwtToken");
    setrender(true);
  };

  
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
            onClick={() => setopen2(!open2)}
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

          <img
            src={userData && userData.picturePath}
            alt=""
            className="img-fluid rounded-circle mynavbarimg pt-0"
            onClick={() => setopen(!open)}
          />

          {!open && (
            <motion.ul
              class="pt-lg-3 pt-1 fw-lighta bg-blacks  shadow shadow-strong p-0 absoluters  "
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{
                type: "keyframes",
                duration:".5"
              }}
            >
              <motion.li
                class={
                  " text-light py-2 pb-3 px-3 mt-0 h5 ps-md-3 ps-3 fw-lighta mb-3 m-0 border-bottom border-secondary border-opacity-50 "
                }
              >
                <span className="text-purple text-uppercase rounded-2">
                  HI {userData && userData.name}
                </span>
              </motion.li>
              <Link
                class="text-start text-light py-0 px-md-2 px-2 m-0 fw-lighta   ps-md-3 ps-3 "
                to={"/webdevify/profile"}
              >
                <i
                  class={`fa-solid fa-user  muted pe-3`}
                  aria-hidden="true"
                ></i>
                <span className="fw-lighta">My Profile</span>
              </Link>
              <hr className="p-0  border-opacity-25" />

              <motion.li class="text-start text-light py-0 px-md-2 px-2 m-0 fw-lighta   ps-md-3 ps-3  ">
                <i
                  class={`fa-solid fa-pen-to-square  muted pe-3`}
                  aria-hidden="true"
                ></i>
                <span className="fw-lighta">Edit Profile</span>
              </motion.li>
              <hr className="p-0   opacity-25" />

              <Link
                class="text-start text-light py-0 px-md-2 px-2 m-0 fw-lighta  pt-0  ps-md-3 ps-3 "
                onClick={signout}
              >
                <i
                  class={`fa-solid fa-right-from-bracket  muted pe-3`}
                  aria-hidden="true"
                ></i>
                <span className="fw-lighta">Sign Out</span>
              </Link>
              <hr className="p-0   opacity-25" />
            </motion.ul>
          )}
          <div className="ms-md-2 d-md-block d-none text-uppercase">
            {data && data.name}
          </div>
        </div>
        <div class="d-md-none d-block mt-3 w-100 bg-black py-3">
          <div className="row m-0 justify-content-between px-3">
            <Link
              to={"/webdevify"}
              className=" col-2 fa fa-home text-purple small"
            ></Link>
            <Link class="fa fa-video text-purple  col-2 small"></Link>
            <Link
              to={"/friends"}
              class="fa-solid fa-user-group text-purple col-2 small"
            ></Link>
            <Link
              to={"/notificationmob"}
              class="fa-solid fa-bell text-purple col-2 small "
            ></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
