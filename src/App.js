import "./App.css";
import { Center } from "./Components/Center/center";
import { Leftside } from "./Components/Leftside/leftside";
import { Rightside } from "./Components/Rightside/rightside";

function App() {
  return (
    <div className="App">
      <Leftside />
      <Center />
      <Rightside />
    </div>
  );
}

export default App;
