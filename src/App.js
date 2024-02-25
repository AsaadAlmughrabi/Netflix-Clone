import Home from "./components/home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="" element="">
          Not Found
        </Route>
      </Routes>
    </>
  );
}

export default App;
