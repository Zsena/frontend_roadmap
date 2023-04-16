
import "./App.css";
import NavRoute from "./components/Navbar/NavRoute";

const App = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <main className="flex flex-col justify-center pb-10">
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
