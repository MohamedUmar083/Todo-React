import React, { useState } from "react";

const Input = ({ newTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    newTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div>
      <div className="container container-input">
        <h3>My Todo</h3>
        <div className="row row-cols-2 g-3 align-items-center ">
          <div className="col">
            <input
              type="text"
              placeholder="Title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Description"
              className="form-control"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2 col-4 mx-auto">
            <button className="btn btn-outline-success" onClick={handleSubmit}>
              Add-Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
