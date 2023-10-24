import React, { useContext, useState } from "react";
import { AuthContexter } from "../../../context/Authcontext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase";
import Loader from "../Loader";
import { InfinitySpin } from "react-loader-spinner";
function Createpost() {
  const { userData, setrender, render } = useContext(AuthContexter);
  const [file, setfile] = useState("");
  const [prewimg, setprewimg] = useState("");
  const [loading, setloading] = useState(false);
  const [sendingdata, setsendingdata] = useState({
    userId: userData._id,
    name: userData.name,
    email: userData.email,
    description: "",
    picturePath: "",
    userPicturePath: userData.picturePath,
  });
  const handelchange = (e) => {
    setsendingdata({ ...sendingdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      const response = await fetch("http://localhost:8000/user/newpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendingdata),
      });

      if (response.ok) {
        console.log("Post created successfully");
        setprewimg("");
        setsendingdata({
          userId: "",
          name: "",
          email: "",
          description: "",
          picturePath: "",
          userPicturePath: "",
        });
        setrender("1" + render);
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handelimagechange = async (e) => {
    setloading(true);
    setprewimg(URL.createObjectURL(e.target.files[0]));
    const storageRef = await ref(storage, `${e.target.files[0].name}`);

    await uploadBytesResumable(storageRef, e.target.files[0]).then(async () => {
      const hj = await getDownloadURL(storageRef);
      setsendingdata({
        ...sendingdata,
        picturePath: hj,
      });
    });
    setloading(false);
    console.log(sendingdata);
  };
  return (
    <div className="col-12  p-0 mb-3 ">
      <div className="card bg-blacks border-0 shadow d-sm-block d-none">
        <div className="card-header text-light fs-3 fw-lighta py-md-2 py-2 border-bottom border-dark border-2 d-sm-block d-none">
          Create Post
        </div>

        <div className="card-body d-flex d-block py-md-2 py-2">
          <div className="d-flex w-100">
            <img
              src={userData.picturePath}
              alt=""
              className="img-fluid rounded-circle mynavbarimg pt-0"
            />
            <input
              type="text"
              className="bg-transparent ps-3 border-0 text-light w-100 fw-lighta small"
              placeholder="Write Something"
              name="description"
              value={sendingdata.description}
              onChange={(e) => handelchange(e)}
            />
          </div>
          <div
            className={`btn bg-purpleless text-purple mt-0 ${
              loading ? "disabled" : ""
            }`}
            onClick={handleSubmit}
          >
            POST
          </div>
        </div>
        <div className="card-footer py-md-3 py-2 border-top border-dark border-2 px-1">
          {!loading ? (
            <>
              {prewimg && (
                <img
                  src={
                    !prewimg
                      ? "https://marketplace.canva.com/lacwk/MAEkYOlacwk/1/tl/canva-black-avatar-MAEkYOlacwk.png"
                      : prewimg
                  }
                  className="w-100 mb-3 seting px-2 rounded-4"
                  alt=""
                />
              )}
            </>
          ) : (
            <div className="w-100 text-center">
              <InfinitySpin width="200" color="#0a66c2" />
            </div>
          )}
          <div className="d-flex p-0">
            <div className="px-1">
              <input
                type="file"
                className=" d-none"
                name="profilePicture"
                id="customFile2"
                accept="image/*"
                onChange={(e) => handelimagechange(e)}
              />
              <label
                className={`btn bg-purpleless text-purple fw-lighta fw-bolder m-0 px-md-1 px-0 pe-1 ${
                  loading ? "disabled" : ""
                }  `}
                htmlFor="customFile2"
              >
                <i className="fa-solid fa-image  text-success pe-md-2 pe-1 ps-1"></i>
                Add Photo
              </label>
            </div>
            <div className="px-1 mt-sm-0">
              <div className="btn bg-purpleless text-purple fw-lighta fw-bolder m-0 px-md-1 px-0 pe-1">
                <i className="fa-solid fa-face-smile  text-warning pe-md-2 pe-1 ps-1"></i>
                Feeling
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        //aaa
      }
      <div className="card bg-blacks border-0 shadow d-sm-none d-block px-1 py-1">
        <div className="card-header text-light h5 fw-lighta py-2  border- border-dark border-2  d-block">
          Create Post
        </div>

        <div className="card-body d-flex d-block  py-2">
          <div className="d-flex w-100">
            <img
              src={userData.picturePath}
              alt=""
              className="img-fluid rounded-1 d-none  pt-0"
              width={"15%"}
            />
            <input
              type="text"
              className="bg-transparent ps-1 border-0 text-white w-100  small fw-lighta"
              placeholder="Write Something"
            />
          </div>
          <div className="btn bg-purpleless text-purple  fw-bolder m-0 py-1 px-2 fw-lighta small btn-sm">Post</div>
        </div>
        <div className="card-footer py-md-3 py-2 border- border-dark border-2 px-1">
          <div className="d-flex p-0">
            <div className="px-1 ps-2">
              <input
                type="file"
                className=" d-none"
                name="profilePicture"
                id="customFile2"
                accept="image/*"
                onChange={(e) => handelimagechange(e)}
              />
              <label
                className={`btn bg-purpleless text-purple  fw-bolder m-0 py-1 px-2 fw-lighta small btn-sm ${
                  loading ? "disabled" : ""
                }`}
                htmlFor="customFile2"
              >
                Add Photo
              </label>
            
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createpost;
