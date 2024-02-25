import "./Home.css";
import { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar.js";
import MovieList from "../movieList/MovieList";
import axios from "axios";

function Home() {
  const [movirArr, setMovieArr] = useState([]);

  const sendReq = async () => {
    const serverUrl = "http://localhost:3002/trending";
    //const res = await fetch(serverUrl);
    await axios
      .get(serverUrl)
      .then((res) => {
        setMovieArr(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const resJson = await res.json();
  // console.log(resJson);
  // setMovieArr(resJson);

  useEffect(() => {
    sendReq();
  }, []);
  return (
    <>
      <NavBar />

      <MovieList movies={movirArr} />
    </>
  );
}
export default Home;
