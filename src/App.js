
import "./App.css";
import Footer from "./components/Footer/Footer";
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
    <main className="flex flex-col justify-center">
      <NavRoute />
      <Footer />
    </main>
  );
};

export default App;
