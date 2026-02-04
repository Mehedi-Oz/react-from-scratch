const ErrorMessage = ({items}) => {
  return (
    <>
      {/* conditional rendering -- logical operator */}
      {items.length === 0 && <h3>There are no food items!</h3>}
    </>
  );
};

export default ErrorMessage;
