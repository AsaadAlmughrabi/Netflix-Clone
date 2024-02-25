import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import ModalMovie from "../modalMovie/ModalMovie";

function Movie(props) {
  const [modalShow, setModalShow] = useState(false);
  const handleOnClick = () => {
    setModalShow(true);
  };
  const [showMore, setShowMore] = useState(true);

  const handleSeeMore = () => {
    setShowMore(!showMore);
  };
  const MaxChar = 100;
  const description = showMore
    ? props.movieData.overview.substring(0, MaxChar)
    : props.movieData.overview;

  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${props.movieData.poster_path}`}
          />
          <Card.Body>
            <Card.Title>{props.movieData.title}</Card.Title>
            <Card.Text className="card-text">
              {description}
              <Button className="see-more-btn" onClick={handleSeeMore}>
                {showMore ? "See More" : "See Less"}
              </Button>
            </Card.Text>
            <Button variant="success" onClick={handleOnClick}>
              Add to the favorite list
            </Button>
            <ModalMovie
              show={modalShow}
              onHide={() => setModalShow(false)}
              movie={props.movieData}
            />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default Movie;
