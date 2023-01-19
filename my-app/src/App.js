import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Sidebar } from "./components/sidebar/sidebar";
import { Main } from "./components/main/main";

function App() {
  return (
    <div>
      <Navbar />
      <div className="centre">
        <div className="side">
          <Sidebar />
        </div>
        <div className="main">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
