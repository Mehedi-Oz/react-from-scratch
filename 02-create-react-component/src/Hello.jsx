function Hello() {

  let myName = "Hasan"
  let fullName = () => {
    return "Mahadi Hasan";
  }

  return (
    <h3>
      Hello, I am {fullName()}
    </h3>
  )
}

export default Hello;
