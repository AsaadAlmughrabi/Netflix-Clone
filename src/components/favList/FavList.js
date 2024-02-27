import "./FavList.css";
import { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar.js";
import axios from "axios";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Text,
  Heading,
  Stack,
  Image,
  ButtonGroup,
  Divider,
  Textarea,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

function FavList() {
  const [movies, setMovies] = useState([]);
  const [comments, setComments] = useState({});
  const toast = useToast();

  const sendReq = async () => {
    let serverUrl = "https://movies-be-server.onrender.com/getMovies";
    await axios
      .get(serverUrl)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    sendReq();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    const serverUrl = `https://movies-be-server.onrender.com/DELETE/${id}`;
    await axios
      .delete(serverUrl)
      .then((res) => {
        console.log(res.data);
      })
      .then(() => {
        sendReq();
        toast({
          title: "Success",
          description: "Movie deleted successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handchange = (id, event) => {
    setComments({ ...comments, [id]: event.target.value });
  };

  const handleUpdate = async (
    id,
    title,
    overview,
    release_date,
    poster_path,
    comments
  ) => {
    const updateData = {
      title: title,
      overview: overview,
      release_date: release_date,
      poster_path: poster_path,
      comments: comments,
    };

    fetch(`https://movies-be-server.onrender.com/UPDATE/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(updateData),
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
        sendReq();
        setComments({}); // clear the text area
        toast({
          title: "Success",
          description: "Movie updated successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <NavBar />
      <Flex
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
 
      >
        {movies.map((favMovie) => (
          <ChakraProvider key={favMovie.id}>
            <Card maxW="sm" bg="gray.100" size="sm">
              <CardBody>
                <Image
                  style={{ height: "300px", width: "300px" }}
                  src={`https://image.tmdb.org/t/p/w500/${favMovie.poster_path}`}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{favMovie.title}</Heading>
                  <Text>{favMovie.overview}</Text>
                  <Text>Comment : {favMovie.comments}</Text>
                  <Textarea
                    placeholder="Update your comment!"
                    value={comments[favMovie.id] || ""}
                    onChange={(event) => handchange(favMovie.id, event)}
                  />
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => {
                      handleUpdate(
                        favMovie.id,
                        favMovie.title,
                        favMovie.overview,
                        favMovie.release_date,
                        favMovie.poster_path,
                        comments[favMovie.id]
                      );
                    }}
                  >
                    update
                  </Button>
                  <Button
                    variant="ghost"
                    colorScheme="red"
                    onClick={() => {
                      handleDelete(favMovie.id);
                    }}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </ChakraProvider>
        ))}
      </Flex>
    </>
  );
}
export default FavList;
