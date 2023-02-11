import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import MovieDetails from "./component/MovieDetails/MovieDetails";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
