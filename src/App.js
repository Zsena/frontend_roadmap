// import logo from "./logo.svg";
import "./App.css";
// import { useState, useEffect } from "react";
// import Avatar from "./components/About/Avatar";
import NavRoute from "./components/Navbar/NavRoute";


// const user = {
//   name: "Keanu Reeves",
//   imageUrl:
//     "https://www.nme.com/wp-content/uploads/2022/07/Keanu-Reeves-new-696x442.jpg",
//   imageSize: 90,
//   description: "Lorem ipsum dolor sit amet ...",
// };

const App = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <main className="base-section flex flex-col justify-center pb-10 h-screen">
      <NavRoute />
      <section className="container mx-auto pt-10">
        {/* <section className="flex items-center justify-around flex-wrap">
          {data.map((userData) => {
            return (
              <Avatar
                key={userData.id}
                user={{
                  name: userData.name,
                  imageUrl: user.imageUrl,
                  description: userData.email,
                  imageSize: user.imageSize,
                }}
              />
            );
          })}
        </section> */}
      </section>
    </main>
  );
};

export default App;
