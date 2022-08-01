import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signin from "./pages/Signin/Signin";
import Netflix from "./pages/Home/Netflix";
import Moviesadd from "./components/moviesupload/Moviesadd";
import Movielist2 from "./components/Movieslist/Movielist2";
import Movieplay from "./components/Movieplay/Movieplay";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Routes>
          <Route path="/netflix" element={<Netflix />} />
          <Route path="/moviesadd" element={<Moviesadd />} />
          <Route path="/movieslist" element={<Movielist2 />} />
          <Route path="/movieplay" element={<Movieplay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
