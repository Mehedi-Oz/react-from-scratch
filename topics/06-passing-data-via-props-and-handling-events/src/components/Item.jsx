import styles from './Item.module.css';

const Item = ({ foodItem }) => {

  const handleBuyButton = (event) => {
    console.log(event)
    console.log(`Buy ${foodItem}?`)
  }

  return (
    <>
      <li className={`list-group-item ${styles['custom-item']}`}>
        <span>{foodItem}</span>

        <button
          className={` ${styles.button} btn btn-info`}
          onClick={(event) => handleBuyButton(event)}>
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
