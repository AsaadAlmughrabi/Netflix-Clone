import Home from "./components/home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FavList from "./components/favList/FavList";

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home />}></Route>

        <Route path="/favList" element={<FavList />}></Route>
      </Routes>
    </>
  );
}

export default App;
