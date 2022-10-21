import axios from "axios";
import { useState, useEffect, useRef } from "react";

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutor = { title, description };
    addTutorial(newTutor);
    setTitle("");
    setDescription("");
  };
  useEffect(() => {
    titleInput.current.focus();
  }, []);

  //!POST - CRUD(Create)
  const addTutorial = async (newTutor) => {
    const url = "https://cw-axios-example.herokuapp.com/api/tutorials";
    try {
      await axios.post(url, newTutor);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div className="add-tutorial">
      <div className="container text-center pt-4 ">
        <h1 className="display-6 fw-5 text-danger">Add Your Tutorial</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label fs-4">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter your title"
              value={title}
              ref={titleInput}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label fs-4">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              placeholder="Enter your Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-danger mb-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddTutorial;
