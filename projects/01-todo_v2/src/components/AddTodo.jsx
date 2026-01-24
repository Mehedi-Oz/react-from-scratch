import style from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container">

      <div className="row custom-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" className={style.inputBox} />
        </div>
        <div className="col-4">
          <input type="date" className={style.inputBox} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success custom-button">Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo;
