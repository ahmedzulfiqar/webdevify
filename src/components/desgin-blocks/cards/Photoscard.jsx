import React, { useContext } from "react";
import { AuthContexter } from "../../../context/Authcontext";

function Photoscard({ posts }) {
  const { userData, setrender, render, api_base } = useContext(AuthContexter);
  const images = [
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/g1.jpg",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/g2.jpg",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/g3.jpg",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/g4.jpg",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/g5.jpg",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/g6.jpg",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/g7.jpg",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/g8.jpg",
    },
    {
      image:
        "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/g1.jpg",
    },
  ];
  return (
    <div className="card bg-blacks rounded-1 shadow px-md-0 mb-3">
      <div class="card-header text-light fs-3 fw-lighta py-md-2 py-2 ps-4 border-bottom border-dark border-2 d-block">
        Photos
      </div>
      <div className="card-header py-3 px-3">
        <div className="row m-0">
          {posts.length > 0 ? (
            posts.map((i, index) => {
              console.log(posts);
              return (
                <>
                  <div
                    className="col-4 px-1 pb-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal${index}`}
                  >
                    <img src={i.picturePath} alt="" className="img-fluid sethmi" />
                  </div>
                  <div
                    class="modal fade"
                    id={`exampleModal${index}`}
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <img src={i.picturePath} alt="" className="img-fluid" />
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <h1 className="fw-lighta fs-3 text-danger">No Photos</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Photoscard;
