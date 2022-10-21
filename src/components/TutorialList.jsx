import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const TutorialList = ({ tutorials, getTutorials }) => {
  const [modal, setModal] = useState({
    id: "",
    title: "",
    description: "",
  });
  //!DELETE (CRUD-Delete)
  const deleteTutorial = async (id) => {
    const url = "https://cw-axios-example.herokuapp.com/api/tutorials";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  //! EDIT (CRUD-Edit)
  const editFunc = ({ id, description, title }) => {
    setModal({ id, title, description });
  };

  const handleSave = () => {
    const { id, title, description } = modal;
    editTutorial(id, title, description);
  };

  const editTutorial = async (id, title, description) => {
    const url = "https://cw-axios-example.herokuapp.com/api/tutorials";
    try {
      await axios.put(`${url}/${id}`, { title, description });
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  return (
    tutorials.length && (
      <div className="tutorial">
        <div className="container mt-4">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">#id</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col" className="text-center">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {tutorials?.map((item) => {
                const { id, title, description } = item;
                return (
                  <tr key={id}>
                    <th>{id}</th>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td className="text-center text-nowrap">
                      <FaEdit
                        size={20}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                        className="me-2 text-warning"
                        onClick={() => editFunc(item)}
                      />
                      <AiFillDelete
                        size={22}
                        type="button"
                        className="text-danger "
                        onClick={() => deleteTutorial(id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <EditTutorial
            modal={modal}
            setModal={setModal}
            handleSave={handleSave}
          />
        </div>
      </div>
    )
  );
};

export default TutorialList;
