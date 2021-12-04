import "./App.css";
import FormikReact from "./Componets/FormikReact";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "./Redux/List/action";
function App() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.list);
  const handleDeleteItem = (id) => {
    dispatch(deleteItem({ id: id }));
  };
  const handleEditItem=(id)=>{
    console.log(id);
    
  }
  return (
    <div className="work_experience">
      <h2>Work Experience</h2>
      <div className="App">
        <div className="list">
          {list.map(({ values, id }) => (
            <div className="list_item" key={id}>
              {values.jobTitle}
              <span className="date">
                {values.startDate.getMonth() +
                  1 +
                  " / " +
                  values.startDate.getFullYear()}
                {" - "}
                {values.currentlyWork
                  ? "Recently"
                  : values.endDate.getMonth() +
                    1 +
                    " / " +
                    values.endDate.getFullYear()}
              </span>
              <button onClick={() => handleEditItem(id)} className="edit_item">
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
        <FormikReact />
      </div>
    </div>
  );
}

export default App;
