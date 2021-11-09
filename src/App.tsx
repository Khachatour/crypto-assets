import { useEffect } from 'react'
import TabElement from './components/TabElement'
import { CryptoWallet } from './assets/CryptoWallet'
import { Bat } from './assets/Bat'
import { CreditCard } from './assets/CreditCard'
import { WalletAdd } from './assets/WalletAdd'
import './index.scss'
import Separator from './components/Separator'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { changeTab } from './store/actions/utils'

const TABS = [
  {
    name: 'crypto',
    props: { label: 'Crypto', icon: CryptoWallet },
    component: TabElement
  },
  {
    name: 'rewards',
    props: { label: 'Rewards', icon: Bat },
    component: TabElement
  },
  {
    name: 'cards',
    props: { label: 'Cards', icon: CreditCard },
    component: TabElement
  },
  {
    component: Separator
  },
  {
    name: 'add_exchange',
    props: { label: 'Add Exchange', icon: WalletAdd },
    component: TabElement
  }
]

function App() {
  const activeTab = useSelector<RootState>(state => state.utils.activeTab)
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch('http://localhost:5000/assets')
    //   .then(res => res.json())
  }, [])

  return (
    <div className="App">
      <div className="tabSection">
        {TABS.map(tab => {
          if(tab.props) {
            return <tab.component {...tab.props} active={activeTab === tab.name} onClick={() => dispatch(changeTab(tab.name))} />
          } else {
            return <tab.component />
          }
        })}
      </div>
      <div className="mainSection">
        <input placeholder="search"/>
      </div>
      <div className="spareSection">
      </div>
    </div>
  )
}

export default App
