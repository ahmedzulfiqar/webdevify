import React, { useEffect, useState } from "react";
import Homecover from "../components/covers/Homecover";
import Navbar from "../components/desgin-blocks/Navbar";
import Sidebarcomp from "../components/desgin-blocks/Sidebarcomp";
import Mainsection from "../components/sections/Mainsection";
function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    console.log(window.innerWidth, window.innerHeight);
  };
  useEffect(() => {
    updateScreenSize();
  }, []);
  const [open2, setopen2] = useState(window.innerWidth > 800 ? false : true);
  return (
    <Homecover>
      <Navbar setopen2={setopen2} open2={open2} />
      <Sidebarcomp open2={open2} />
      <Mainsection open2={open2} />
    </Homecover>
  );
}

export default Home;
