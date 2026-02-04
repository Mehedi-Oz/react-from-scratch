import styles from './FoodInput.module.css'

const FoodInput = ({handleOnChange}) => {

  return (
    <>
      <input type="text" className={`form-control ${styles.foodInput}`} placeholder="Enter Food Item Here" onChange={handleOnChange}
      />
    </>
  )
}

export default FoodInput
