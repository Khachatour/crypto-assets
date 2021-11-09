import TabElement from '../components/TabElement'
import { CryptoWallet } from '../assets/CryptoWallet'
import { Bat } from '../assets/Bat'
import { CreditCard } from '../assets/CreditCard'
import { WalletAdd } from '../assets/WalletAdd'
import Separator from '../components/Separator'
import { changeTab } from '../store/actions/utils'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { TABS } from '../constants'

const TABS_TO_SHOW = [
  {
    name: TABS.CRYPTO,
    props: { label: 'Crypto', icon: CryptoWallet },
    component: TabElement
  },
  {
    name: TABS.REWARDS,
    props: { label: 'Rewards', icon: Bat },
    component: TabElement
  },
  {
    name: TABS.CARDS,
    props: { label: 'Cards', icon: CreditCard },
    component: TabElement
  },
  {
    component: Separator
  },
  {
    name: TABS.ADD_EXCHANGE,
    props: { label: 'Add Exchange', icon: WalletAdd },
    component: TabElement
  }
]

const Tabs = () => {
  const activeTab = useSelector<RootState>(state => state.utils.activeTab)
  const dispatch = useDispatch();

  return <>
    {TABS_TO_SHOW.map((tab, idx) => {
      if(tab.props) {
        return <tab.component key={tab.name} {...tab.props} active={activeTab === tab.name} onClick={() => dispatch(changeTab(tab.name))} />
      } else {
        return <tab.component key={idx}/>
      }
    })}
  </>
}

export default Tabs