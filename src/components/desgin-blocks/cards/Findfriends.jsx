import React, { useContext, useEffect, useState } from "react";
import profile from "../../media/me.jpg";
import Birthdayprofile from "../profiles/Birthdayprofile";
import { AuthContexter } from "../../../context/Authcontext";

function Findfriends() {
  const [users, setUsers] = useState([]);
  const [inputval, setinputval] = useState("");
  const { userData, setrender, render, api_base } = useContext(AuthContexter);
  const [request, setrequest] = useState(false);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${api_base}/user/allusers`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        alert("Server Not Working:", error);
      }
    }

    fetchUsers();
  }, [render]);

  const birthdarylist = [
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/01.jpg",
      date: "Today",
      name: "Hamza Shebaz",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s2.jpg",
      date: "Tommorow",
      name: "Anna Sthesia",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/1.jpg",
      date: "23 March",
      name: "Jhon Smith",
    },
    {
      image: profile,
      date: "8 October",
      name: "Ahmed Zulfiqar",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s2.jpg",
      date: "Tommorow",
      name: "Anna Sthesia",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/01.jpg",
      date: "Today",
      name: "Hamza Shebaz",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s2.jpg",
      date: "Tommorow",
      name: "Anna Sthesia",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/1.jpg",
      date: "23 March",
      name: "Jhon Smith",
    },
    {
      image: profile,
      date: "8 October",
      name: "Ahmed Zulfiqar",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s2.jpg",
      date: "Tommorow",
      name: "Anna Sthesia",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/1.jpg",
      date: "23 March",
      name: "Jhon Smith",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s2.jpg",
      date: "Tommorow",
      name: "Anna Sthesia",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/1.jpg",
      date: "23 March",
      name: "Jhon Smith",
    },
  ];
  console.log(
    users
      .filter((item) => item.email !== userData.email)
      .filter((item) => item.requests.includes(userData._id))
  );
  return (
    <div className="col-12  p-0 ">
      {users && (
        <div className="card bg-blacks border-0 rounded-1 shadow d-block ">
          <div class="card-header text-light fs-3 fw-lighta py-md-2 py-2 border-0 d-block">
            Find Friends
          </div>
          <hr className="m-0 p-0 opacity-25" />
          <div class="card-header mx-1 border-bottom border-primary mx-3  my-2 rounded-0 text-muted d-flex justify-content-start align-items-center ">
            <input
              type="text"
              class="bg-transparent border-0 py-0 fw-lighta small w-100 text-light  "
              placeholder="Search"
              onChange={(e) => setinputval(e.target.value)}
            />

            <a class="ms-3 text-purple" href="#!">
              <i class="fas fa-search"></i>
            </a>
          </div>
          <div className=" p-0 m-0 py-1 pb-0">
            <div class="card-footer border-0 py-md-1  py-1 px-4 setfindfriends my-2">
              {users ? (
                users
                  .filter((item) => item.email !== userData.email)
                  .filter((item) => !item.requests.includes(userData._id))
                  .filter((i) => !userData.requests.includes(i._id))
                  .filter((i) => !userData.friends.includes(i._id))
                  .filter((item) =>
                    item.name.toLowerCase().includes(inputval.toLowerCase())
                  )
                  .map((i) => {
                    console.log("");
                    return (
                      <>
                        <Birthdayprofile data={i} />
                      </>
                    );
                  })
              ) : (
                <>
                  <div className="fs-4 fw-lighta">Not Found</div>
                </>
              )}{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Findfriends;
