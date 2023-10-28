import React, { useContext, useEffect, useState } from "react";
import image from "../../media/me.jpg";
import Friendslistcard from "../cards/Friendslistcard";
import { AuthContexter } from "../../../context/Authcontext";
function Friendprofile() {
  const { userData, setrender, render, api_base } = useContext(AuthContexter);
  const [friends, setfriends] = useState([]);
  useEffect(() => {
    const getfriends = async () => {
      try {
        const userId = await userData._id;
        const response = await fetch(`${api_base}/user/friends`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
        const result = await response.json();
        setfriends(result.response);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getfriends();
  }, [render]);
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
              <div className="text-light">{userData.name}</div>
              <span className="small fs-2"> Friends List</span>
            </div>
          </div>
        </div>
        <div className="col-12 p-0">
          <div className="container-fluid px-0">
            <div className="row m-0 py-3">
              {friends.length > 0 ? (
                friends.map((i) => {
                  return <Friendslistcard data={i} />;
                })
              ) : (
                <h1 className="fw-lighta fs-3 text-danger">
                  <i class="fa-regular fa-face-frown pe-2"></i>Not Found
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friendprofile;
