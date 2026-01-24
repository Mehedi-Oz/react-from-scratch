import styles from './Item.module.css';

const Item = ({ foodItem }) => {
  return (
    <>
      <li className={`list-group-item ${style['custom-item']}`}>{foodItem}</li>
    </>
  );
};

export default Item;
