import React, { useContext, useEffect, useState } from "react";
import profile from "../../media/me.jpg";
import Birthdayprofile from "../profiles/Birthdayprofile";
import { AuthContexter } from "../../../context/Authcontext";

function Findfriends() {
  const [users, setUsers] = useState([]);
  const [inputval, setinputval] = useState("");
  const { userData, setrender, render } = useContext(AuthContexter);
  const [request, setrequest] = useState(false);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("http://localhost:8000/user/allusers");
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
  return (
    <div className="col-12  p-0 ">
      {users && (
        <div className="card bg-blacks border-0 shadow d-block ">
          <div class="card-header text-light fs-3 fw-lighta py-md-2 py-2 border-bottom border-dark border-2 d-block">
            <i class="fa-solid fa-cake text-purple me-2" aria-hidden="true"></i>{" "}
            Find Friends
          </div>
          <div class="card-header  border-purple  mx-2 my-2 rounded-2 text-muted d-flex justify-content-start align-items-center ">
            <input
              type="text"
              class="bg-transparent border-0 py-0 fw-lighta w-100 text-light  "
              placeholder="Type message"
              onChange={(e) => setinputval(e.target.value)}
            />

            <a class="ms-3 text-purple" href="#!">
              <i class="fas fa-search"></i>
            </a>
          </div>
          <div className=" p-0 m-0 py-2 pb-0">
            <div class="card-footer py-md-1  py-1 px-4 setfindfriends my-2">
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
