import React, { useState } from "react";
import Input from "./Components/Input";
// import Card from "./Components/Card";
import Cards from "./Components/Cards";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");
  const newTodo = (newTitle, newDescription) => {
    let data = {
      title: newTitle,
      description: newDescription,
      status: "not_completed",
    };

    setTodo([...todo, data]);
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((ele, index) => index !== id));
  };

  return (
    <div className="container container-head">
      <Input newTodo={newTodo} />
      <div className="container container-status">
        <label className="form-lable">Status Filter</label>&nbsp;
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="not_completed">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <Cards
        todo={todo}
        setTodo={setTodo}
        deleteTodo={deleteTodo}
        filter={filter}
      />
    </div>
  );
};

export default App;
