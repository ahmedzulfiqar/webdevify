import React, { useState } from "react";
import Homecover from "../components/covers/Homecover";
import Navbar from "../components/desgin-blocks/Navbar";
import Sidebarcomp from "../components/desgin-blocks/Sidebarcomp";
import Mainsection from "../components/sections/Mainsection";
function Home() {
  const [open, setopen] = useState(false);
  return (
    <Homecover>
      <Navbar setopen={setopen} open={open} />
      <Sidebarcomp open={open} />
      <Mainsection open={open} />
    </Homecover>
  );
}

export default Home;