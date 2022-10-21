import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    try {
      const { data } = await axios(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <AddTutorial getTutorials={getTutorials} className="tutorial" />
          <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
        </div>
      )}
    </>
  );
};

export default Home;
