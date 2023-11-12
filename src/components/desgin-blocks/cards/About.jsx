import React, { useContext, useState } from "react";
import { AuthContexter } from "../../../context/Authcontext";

function About() {
  const { userData, setrender, render, api_base } = useContext(AuthContexter);
  const [editmode, seteditmode] = useState(false);
  const [detail, setdetail] = useState({
    bio: "",
    occupation: "",
    location: "",
  });
  const handelchange = (e) => {
    setdetail({
      ...detail,
      [e.target.name]: e.target.value,
    });
  };
  const submit = async () => {
    const email = userData && userData.email;
    try {
      const response = await fetch(`http://localhost:8000/edit-details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, detail }),
      });
      const result = await response.json();
      setrender(render + "fvfd");
      seteditmode(!editmode);
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="card bg-blacks rounded-1 shadow px-md-0 mb-3">
      <div class="card-header text-light fs-3 fw-lighta py-md-2 py-2 ps-4 border-bottom border-dark border-2 d-block">
        <div className="d-flex justify-content-between">
          <div className="fw-lighta">About</div>
          {editmode ? (
            <div
              className="fw-lighta fs-6 align-self-center"
              onClick={() => seteditmode(!editmode)}
            >
              <i class={`fa-solid fa-pen-to-square pe-1`}></i>
            </div>
          ) : (
            <div className="fw-lighta fs-6 align-self-center d-flex">
              <div
                className="px-3 small fw-lighta rounded-1 py-1 border-purple pointer"
                onClick={() => seteditmode(!editmode)}
              >
                Cancel
              </div>
              <div
                className="px-3 small fw-lighta rounded-1 py-1 bg-purple ms-2 pointer"
                onClick={submit}
              >
                Save
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="card-header py-3 pe-2">
        <div className="d-block text-muted fw-lighta w-100 py-2">
          <span className="fw-bolder text-light opacity-75 ">Bio - </span>
          {editmode ? (
            <span> {userData?.bio}</span>
          ) : (
            <input
              type="text"
              className="bg-transparent ps-3 border-0 text-light  fw-lighta small"
              placeholder="Write Something"
              onChange={handelchange}
              name="bio"
            />
          )}
        </div>
        <div className="d-block text-muted fw-lighta w-100 py-2">
          <span className="fw-bolder text-light opacity-75">Job - </span>
          {editmode ? (
            <span> {userData?.occupation}</span>
          ) : (
            <input
              type="text"
              className="bg-transparent ps-3 border-0 text-light  fw-lighta small"
              placeholder="Write Something"
              onChange={handelchange}
              name="occupation"
            />
          )}
        </div>
        <div className="d-block text-muted fw-lighta w-100 py-2">
          <span className="fw-bolder text-light opacity-75">Location -</span>
          {editmode ? (
            <span> {userData?.location}</span>
          ) : (
            <input
              type="text"
              className="bg-transparent ps-3 border-0 text-light  fw-lighta small"
              placeholder="Write Something"
              name="location"
              onChange={handelchange}
            />
          )}
        </div>
        <div className="d-block text-muted fw-lighta w-100 py-2">
          <span className="fw-bolder text-light opacity-75">Frineds -</span>
          {""} {userData?.friends.length} Friends
        </div>
      </div>
    </div>
  );
}

export default About;
