import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  let foodItems = ["Apple", "Banana", "Spinach", "Broccoli", "Salmon", "Milk"];

  return (
    <Container>
      <h1>Healthy Food</h1>
      <FoodInput></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  )
}

export default App;
