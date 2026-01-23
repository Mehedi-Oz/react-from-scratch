function CurrentTime() {

  let timeNow = new Date();

  return (
    <div className="custom-row lead">
      <p>
        This is the current time: {timeNow.toLocaleDateString()} - {timeNow.toLocaleTimeString()}
      </p>
    </div>
  )
}

export default CurrentTime;
