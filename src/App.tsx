import { useEffect } from 'react'
import './index.scss'
import PortfolioCoins from './views/PortfolioCoins'
import Tabs from './views/Tabs'

function App() {
  useEffect(() => {
    // fetch('http://localhost:5000/assets')
    //   .then(res => res.json())
  }, [])

  return (
    <div className="App">
      <div className="tabSection">
        <Tabs />
      </div>
      <div className="mainSection">
        <PortfolioCoins />
      </div>
      <div className="spareSection">
      </div>
    </div>
  )
}

export default App
