import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieGrid from "./components/MovieGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header> </Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/"> Home </Link>
                <Link to="/Watchlist"> Watchlist </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<MovieGrid />}></Route>
            <Route path="/Watchlist" element={<Watchlist />}></Route>
          </Routes>
        </Router>

        <MovieGrid></MovieGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
