
import './App.css'
import Navbar from './components/Navbar';
import Card from './components/Card'


function App() {
  return (
    <>
      <div className='container'>

        <div className='header'>
          <Navbar />
        </div>

        <div className='content'>
          <Card />
        </div>

        <div className='footer'>
        </div>

      </div>

    </>
  )
}

export default App
