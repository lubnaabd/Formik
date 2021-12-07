import "./App.css";
import FormikReact from "./Componets/FormikReact";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteItem, getItemById } from "./Redux/List/action";
function App() {
  const dispatch = useDispatch();
  const { editList, list,isEditing } = useSelector((state) => state.list);

  const handleDeleteItem = (id) => {
    dispatch(deleteItem({ id: id }));
  };
  const handleEditItem = (id) => {

    console.log(isEditing);
    
    dispatch(getItemById({ id: id }));

    console.log(editList);


  };
  return (
    <div className="work_experience">
      <h2>Work Experience</h2>
      <div className="App">
        <div className="list">
          {list &&
            list.map(({ values, id }) => (
              <div className="list_item" key={id}>
                {values.jobTitle}
                <span className="list_date">
                  {values.startDate}
                  {" - "}
                  {values.currentlyWork ? "Recently" : values.endDate}
                </span>
                <button
                  onClick={() => handleEditItem(id)}
                  className="edit_item"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteItem(id)}
                  className="delete_item"
                >
                  Delete
                </button>
              </div>
            ))}{" "}
        </div>
        <FormikReact isEditing={isEditing}/>
      </div>
    </div>
  );
}

export default App;
