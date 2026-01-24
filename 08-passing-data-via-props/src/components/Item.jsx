import styles from './Item.module.css';

const Item = ({ foodItem }) => {
  return (
    <>
      <li className={`list-group-item ${styles['custom-item']}`}>{foodItem}</li>
    </>
  );
};

export default Item;
