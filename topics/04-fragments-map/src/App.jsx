// React Fragment (<> </>) allows us to group multiple elements without adding extra DOM nodes.
// We use fragments because React components must return a single parent element.
// Fragments help keep the DOM clean and avoid unnecessary wrapper divs.

// .map() is used to transform arrays into JSX elements.
// It iterates over each item in the array and returns a new array of JSX elements.
// This is the React way of rendering lists dynamically.

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  let foodItems = ["Apple", "Banana", "Spinach", "Broccoli", "Salmon", "Milk"]

  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className='list-group-item'>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App;
