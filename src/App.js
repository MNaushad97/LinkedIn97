import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/* with  react-router-dom v6 Switch is now Routes */
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/Home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
