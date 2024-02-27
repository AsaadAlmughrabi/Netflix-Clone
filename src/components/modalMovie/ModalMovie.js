import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import {useToast} from  "@chakra-ui/react";

function ModalMovie(props) {
  const [comment, setcomment] = useState("");
  const toast=useToast();
  const handleChang = (event) => {
    setcomment(event.target.value);
  };
  const handleButtonClick = async () => {
    console.log("Comment:", comment);
    const postData = {
      title: props.movie.title,
      overview: props.movie.overview,
      release_date: props.movie.release_date,
      poster_path: props.movie.poster_path,
      comments: comment,
    };
  
    fetch("https://movies-be-server.onrender.com/addMovie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response:", data);
      })
      .then(() => {
        toast({
          title: "Success",
          description: "Movie added successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
  
    props.onHide();
  };
  return (
    <>
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.movie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
            rounded
            style={{ height: "200px" }}
          />

          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={comment}
                onChange={handleChang}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleButtonClick}>Done</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }
export default ModalMovie;
