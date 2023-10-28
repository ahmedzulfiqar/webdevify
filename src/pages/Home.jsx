import React, { useEffect, useState } from "react";
import Homecover from "../components/covers/Homecover";
import Navbar from "../components/desgin-blocks/sidebars-navbar/Navbar";
import Sidebarcomp from "../components/desgin-blocks/sidebars-navbar/Sidebarcomp";
import Mainsection from "../components/sections/Mainsection";
function Home({ settheme }) {
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
      <Navbar setopen2={setopen2} open2={open2} settheme={settheme} />
      <Sidebarcomp open2={open2} setopen2={setopen2} />
      <Mainsection open2={open2} />
    </Homecover>
  );
}

export default Home;
