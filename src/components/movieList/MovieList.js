import "./MovieList.css";
import Movie from "../movie/Movie";
import Row from "react-bootstrap/Row";

function MovieList(props) {
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {props.movies.map((movie) => {
          return <Movie movieData={movie} />;
        })}
      </Row>
    </>
  );
}

export default MovieList;
