import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signin from "./pages/Signin/Signin";
import Netflix from "./pages/Home/Netflix";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/netflix" element={<Netflix />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
