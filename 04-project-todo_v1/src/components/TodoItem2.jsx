function TodoItem2() {

  let todoName = 'Go to shop';
  let todoDate = '25/01/26';

  return (
    <div className="container">

      <div className="row custom-row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger custom-button">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem2;
