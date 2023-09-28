import React, { useState } from "react";
import Homecover from "../components/covers/Homecover";
import Navbar from "../components/desgin-blocks/Navbar";
import Sidebarcomp from "../components/desgin-blocks/Sidebarcomp";
import Mainsection from "../components/sections/Mainsection";
function Home() {
  const [open2, setopen2] = useState(false);
  return (
    <Homecover>
      <Navbar setopen2={setopen2} open2={open2} />
      <Sidebarcomp open2={open2} />
    
      <Mainsection open2={open2} />
    </Homecover>
  );
}

export default Home;
