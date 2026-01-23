import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  let foodItems = ["Apple", "Banana", "Spinach", "Broccoli", "Salmon"];

  // let foodItems = [];

  //conditional rendering -- if-else
  /*
  if (foodItems.length === 0) {
    return <h3>There are no food items!</h3>;
  }
  */

  return (
    <>
      <h1>Healthy Food</h1>

      {/* conditional rendering -- ternary operator */}
      {/* {foodItems.length === 0 ? <h3>There are no food items!</h3> : null} */}

      {/* conditional rendering -- logical operator */}
      { foodItems.length === 0 && <h3>There are no food items!</h3> }

      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className='list-group-item'>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App;
