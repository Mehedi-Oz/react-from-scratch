import styles from './FoodInput.module.css'

const FoodInput = ({handleKeyDown}) => {

  return (
    <>
      <input type="text" className={`form-control ${styles.foodInput}`} placeholder="Enter Food Item Here" onKeyDown={handleKeyDown}
      />
    </>
  )
}

export default FoodInput
