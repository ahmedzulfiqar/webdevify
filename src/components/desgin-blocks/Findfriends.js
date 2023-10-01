import React from "react";
import profile from "../media/me.jpg";
import Post from "./Post";
import Birthdayprofile from "./Birthdayprofile";

function Findfriends() {
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
      <div className="card bg-blacks border-0 shadow d-block ">
        <div class="card-header text-light fs-3 fw-lighta py-md-2 py-2 border-bottom border-dark border-2 d-block">
          <i class="fa-solid fa-cake text-purple me-2" aria-hidden="true"></i>{" "}
          Upcoming Birthday
        </div>

        <div className=" p-0 m-0 py-2 pb-0">
          <div class="card-footer py-md-1  py-1 px-4 setfindfriends my-2">
            {birthdarylist.map((i) => {
              return (
                <Birthdayprofile image={i.image} name={i.name} date={i.date} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Findfriends;
