import React from "react";
import image from "../../media/me.jpg";
function Freindscard() {
  const images = [
    {
      image: image,

      name: "Ahmed ",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/06.jpg",
      name: "Erutgul Ghazi",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/07.jpg",
      name: "Osman Bey",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/08.jpg",
      name: "Waleed ",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/09.jpg",
      name: "Nayab Khan",
    },
    {
      image: image,

      name: "Jhon khan",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/07.jpg",
      name: "Mr Beast",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/05.jpg",
      name: "Mark Robber",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/59.jpg",
      name: "I Show Speed",
    },
  ];
  return (
    <div className="card bg-blacks rounded-1 shadow px-md-0 mb-3">
      <div class="card-header text-light fs-3 fw-lighta py-md-2 py-2 ps-4 border-bottom border-dark border-2 d-block">
        <i class="fa-solid fa-user-group text-purple pe-3" aria-hidden="true"></i>
        Friends
      </div>
      <div className="card-header py-3 px-3">
        <div className="row m-0">
          {images.map((i, index) => {
            return (
              <>
                <div className="col-4 px-1 pb-2">
                  <img src={i.image} alt="" className="img-fluid" />
                  <div className="small fw-lighta text-light text-center pt-1 opacity-75">{i.name}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Freindscard;
