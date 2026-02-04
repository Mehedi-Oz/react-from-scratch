import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  let foodItems = ["Apple", "Banana", "Spinach", "Broccoli", "Salmon", "Milk"];

  const handleOnChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <Container>
      <h1>Healthy Food</h1>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  )
}

export default App;
