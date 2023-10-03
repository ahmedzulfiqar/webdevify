import React from "react";
import Profile from "../profiles/Profile";
import profile from "../../media/me.jpg";
function Myfriends() {
  const birthdarylist = [
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/01.jpg",
      friends: "50 Friends",
      name: "Hamza Shebaz",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s2.jpg",
      friends: "250 Friends",
      name: "Anna Sthesia",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/1.jpg",
      friends: "15 Friends",
      name: "Jhon Smith",
    },
    {
      image: profile,
      friends: "43 Friends",
      name: "Ahmed Zulfiqar",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s2.jpg",
      friends: "250 Friends",
      name: "Anna Sthesia",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/1.jpg",
      friends: "15 Friends",
      name: "Jhon Smith",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/01.jpg",
      friends: "50 Friends",
      name: "Hamza Shebaz",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s2.jpg",
      friends: "250 Friends",
      name: "Anna Sthesia",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/1.jpg",
      friends: "15 Friends",
      name: "Jhon Smith",
    },
    {
      image: profile,
      friends: "43 Friends",
      name: "Ahmed Zulfiqar",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s2.jpg",
      friends: "250 Friends",
      name: "Anna Sthesia",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/1.jpg",
      friends: "15 Friends",
      name: "Jhon Smith",
    },
    {
      image: profile,
      friends: "43 Friends",
      name: "Ahmed Zulfiqar",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s2.jpg",
      friends: "250 Friends",
      name: "Anna Sthesia",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/1.jpg",
      friends: "15 Friends",
      name: "Jhon Smith",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/01.jpg",
      friends: "50 Friends",
      name: "Hamza Shebaz",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s2.jpg",
      friends: "250 Friends",
      name: "Anna Sthesia",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/1.jpg",
      friends: "15 Friends",
      name: "Jhon Smith",
    },
    {
      image: profile,
      friends: "43 Friends",
      name: "Ahmed Zulfiqar",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s2.jpg",
      friends: "250 Friends",
      name: "Anna Sthesia",
    },
  ];
  return (
    <div className="col-12 p-0">
      <div className="card border-0 rounded-0  myfriends bg-blacks shadow d-block mt-md-0">
        <div class="card-header text-light fs-3 py-md-2 py-2  rounded-0 ">
          <i
            class="fa-solid fa-user-group text-purple me-2"
            aria-hidden="true"
          ></i>{" "}
          My Friends
        </div>

        <div className=" p-0 m-0 py-0 mt-3">
          <div class="card-footer   py-md-1  py-1 px-4 myfriendsscrol my-1">
            {birthdarylist.map((i) => {
              return (
                <Profile image={i.image} name={i.name} friends={i.friends} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myfriends;
