// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Avatar from "./components/About/Avatar";
import PrimaryBtn from "./components/Buttons/Primary";

const user = {
  name: "Keanu Reeves",
  imageUrl:
    "https://www.nme.com/wp-content/uploads/2022/07/Keanu-Reeves-new-696x442.jpg",
  imageSize: 90,
  description: "Lorem ipsum dolor sit amet ...",
};


const App = () => {
  return (
    
    <main className="base-section flex flex-col justify-center">
      <PrimaryBtn text={"count"} />
      <PrimaryBtn text={"another btn"} />
      <Avatar user={{name: user.name, imageUrl: user.imageUrl, description: user.description, imageSize: user.imageSize}} />
    </main>
  );
};

export default App;
