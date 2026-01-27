import Container from "./components/Container.jsx"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  let foodItems = ["Apple", "Banana", "Spinach", "Broccoli", "Salmon", "Milk"]

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>

        <ul className="list-group">
          {foodItems.map((item) => (
            <li key={item} className='list-group-item'>{item}</li>
          ))}
        </ul>
      </Container>

      <Container>
        Above are some of the healthy food items that are good for our health and well-being.
      </Container>
    </>
  )
}

export default App;
