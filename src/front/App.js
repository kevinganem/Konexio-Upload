// REACT
import { useState } from "react";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [image, setImage] = useState();
  const [username, setUsername] = useState("");
  //const [userList, setUserList] = useState([]);

  const send = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    formData.append("username", username);
    fetch("http://localhost:8000/user", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="d-flex justify-content-center p-3">
      <div className="col-3 d-flex flex-column justify-content-center">
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setUsername(event.target.value)}
          />
          <div className="form-text">
            This will be the username you will use
          </div>
        </div>
        <div class="mb-3">
          <label for="formFile" className="form-label">
            User avatar
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={(event) => setImage(event.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={send}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
