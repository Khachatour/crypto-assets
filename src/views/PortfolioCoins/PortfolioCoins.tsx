import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Search } from '../../assets/Search'
import { ASSET_IMAGE_MAP, ASSET_NAME_MAP } from '../../constants'
import { RootState } from '../../store'

import styles from './PortfolioCoins.module.scss'

const PortfolioCoins = () => {
  const [searchTerm, setSearch] = useState('')
  const selectedAssets = useSelector<RootState, string[]>(state => state.utils.assets)

  return (
    <>
      <form 
        role="search" 
        className={styles.search}
      >
        <Search />
        <input
          type="text" 
          id="search"
          value={searchTerm}
          className={styles.input} 
          placeholder="Search Coins" 
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className={styles.assetList}>
        {selectedAssets.map(asset => (
          <div className={styles.assetRow}>
            <div className={styles.assetInfo}>
              <img src={ASSET_IMAGE_MAP[asset]} />
              <p>{ASSET_NAME_MAP[asset]}</p>
            </div>
            <div className={styles.assetPrice}>
                <span className={styles.price}>$10.00</span>
                <span className={styles.priceInBtc}>$2.00</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}


export default PortfolioCoins