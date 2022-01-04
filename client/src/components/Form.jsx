import { useState } from "react";
import InputFields from "./InputFields";
import { Link } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [alert, setAlert] = useState(false);

  const onChangeFile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImageFile(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        res(fileReader.result);
      };

      fileReader.onerror = (err) => {
        rej(err);
      };
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();

    if (props.editForm && title && body) {
      props.setEditForm(false);
      const obj = { id: props.id, title, body, image: imageFile };
      axios.put("http://localhost:3001/", obj);
      setTitle("");
      setBody("");
      setImageFile("");
    }

    if (!props.editForm && title && body) {
      const obj = { title, body, image: imageFile };
      axios.post("http://localhost:3001/", obj);
      setTitle("");
      setBody("");
      setImageFile("");
      props.setControl(false);
    } else {
      setAlert(true);
    }
  };

  return (
    <div className="container my-2 text-center">
      {alert && (
        <div className="alert">
          <h3 className="alert-warning">Please fill the form</h3>
        </div>
      )}
      <InputFields
        submitHandle={submitHandle}
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        onChangeFile={onChangeFile}
        editForm={props.editForm}
      />

      {!props.editForm && (
        <Link
          to="/"
          className=" btn btn-success text-white my-3 border text-decoration-none"
          onClick={() => props.setControl(false)}
        >
          Back to Todos
        </Link>
      )}
    </div>
  );
};

export default Form;
