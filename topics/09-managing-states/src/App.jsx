import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  // let foodItems = ["Apple", "Banana", "Spinach", "Broccoli", "Salmon", "Milk"];

  // let inputStateArr = useState("Food Item Entered By User")
  // let inputStateVal = inputStateArr[0]
  // let setInputStateVal = inputStateArr[1]

  // let [inputStateVal, setInputStateVal] = useState()
  // console.log(`Current value of the inputState: ${inputStateVal}`)

  // let [foodItems, setFoodItems] = useState([
  //   "Apple", "Banana", "Spinach", "Broccoli",
  // ])

  let [foodItems, setFoodItems] = useState([

  ])

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value
      event.target.value = ""

      // console.log("New Food Item: " + newFoodItem)

      let newInputItems = [...foodItems, newFoodItem]
      setFoodItems(newInputItems)
    }
    // console.log(event)
    // setInputStateVal(event.target.value);
  }

  return (
    <Container>
      <h1>Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      {/* <p>{inputStateVal}</p> */}
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  )
}

export default App;
