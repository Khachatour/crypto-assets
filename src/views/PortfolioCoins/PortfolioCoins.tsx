import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Search } from '../../assets/Search'
import { Plus } from '../../assets/Plus'
import { ASSET_IMAGE_MAP, DEFAULT_ASSETS } from '../../constants'
import { RootState } from '../../store'

import styles from './PortfolioCoins.module.scss'

const parsePrice = (price: number) => {
  const parsedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return parsedValue
}

const parseToBtc = (price: number, btcToUsd: number) => {
  return price / btcToUsd
}

const PortfolioCoins = () => {
  const [searchTerm, setSearch] = useState('')
  const selectedAssets = useSelector<RootState, Array<{name: string, price: number, symbol: string}>>(state => state.assets)
  const btcToUsd = useSelector<RootState, number>(state => state.utils.btcToUsd)

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
          <div className={styles.assetRow} key={asset.symbol}>
            <div className={styles.assetInfo}>
              <img src={ASSET_IMAGE_MAP[asset.symbol]} />
              <p>{asset.name}</p>
            </div>
            <div className={styles.assetPrice}>
                <span className={styles.price}>{parsePrice(asset.price)}</span>
                {asset.symbol !== DEFAULT_ASSETS.BTC 
                  ? <span className={styles.priceInBtc}>{parseToBtc(asset.price, btcToUsd)} BTC</span> 
                  : null}
            </div>
          </div>
        ))}
      </div>
      <div role="button" className={styles.addAsset}>
        <Plus />
        <span>Add Asset</span>
      </div>
    </>
  )
}


export default PortfolioCoins