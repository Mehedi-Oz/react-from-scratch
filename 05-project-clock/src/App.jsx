import ClockHeading from './components/ClockHeading'
import ClockMoto from './components/ClockMoto'
import CurrentTime from './components/CurrentTime'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <div className='clock-container'>
      <ClockHeading className="clock-heading" />
      <ClockMoto className="clock-moto" />
      <CurrentTime className="current-time" />
    </div>
  )
}

export default App
