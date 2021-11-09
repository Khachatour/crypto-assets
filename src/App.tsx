import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { RootState } from './store'
import { setDefaultAssets } from './store/actions/assets'
import PortfolioCoins from './views/PortfolioCoins'
import Tabs from './views/Tabs'

const transformAssets = (selectedAssets: string[], data: Record<string, any>) => {
  return selectedAssets.reduce((acc: Record<string, any>, key: string) => {
    return {...acc, [key]: {
     price: data[key].quote.USD.price,
     name: data[key].name,
     symbol: data[key].symbol
    }}
  }, {})
}

function App() {
  const selectedAssets = useSelector<RootState, string[]>(state => state.utils.assets)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`http://localhost:5000/assets?symbols=${selectedAssets.join(',')}`)
      .then(res => res.json())
      .then((defaultAssets) => {
        const transformedAssets = transformAssets(selectedAssets, defaultAssets.data)
        dispatch(setDefaultAssets(transformedAssets))
      })
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
