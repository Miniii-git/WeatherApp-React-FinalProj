import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search DefaultCity="Shiraz" />
      </div>
      <footer>
        This is an{" "}
        <a href="https://github.com/Miniii-git/WeatherApp-React-FinalProj">
          open source Code
        </a>{" "}
        by Mini ♥
      </footer>
    </div>
  );
}

export default App;
