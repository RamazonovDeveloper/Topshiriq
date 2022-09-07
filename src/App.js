import "./App.css";
import "./assets/main.scss";
import Navbar from "./assets/components/Navbar";
import Start from "./assets/components/Start";

function App() {
  return (
    <div className="App">
      {/* Main part */}
      <Navbar/>
      <Start/>
    </div>
  );
}

export default App;
