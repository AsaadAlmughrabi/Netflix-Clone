import "./Home.css";
import { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar.js";
import MovieList from "../movieList/MovieList";
import axios from "axios";

function Home() {
  const [movirArr, setMovieArr] = useState([]);

  const sendReq = async () => {
    const serverUrl = "https://movies-be-server.onrender.com/trending";
   
    await axios
      .get(serverUrl)
      .then((res) => {
        setMovieArr(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  useEffect(() => {
    sendReq();
  }, []);
  return (
    <>
      <NavBar />
      <div className="card">
      
        <MovieList movies={movirArr}  />
        </div>
    </>
  );
}
export default Home;
