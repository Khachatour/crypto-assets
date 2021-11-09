import { useSelector } from 'react-redux'
import useAssetList from './hooks/useAssetList'
import { RootState } from './store'
import Modal from './views/Modal'
import PortfolioCoins from './views/PortfolioCoins'
import Tabs from './views/Tabs'

import './index.scss'

function App() {
  useAssetList()
  const assetModalVisible = useSelector<RootState, boolean>(state => state.utils.assetModal)

  return (
    <div className="App">
      {assetModalVisible ? <Modal /> : null}
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
