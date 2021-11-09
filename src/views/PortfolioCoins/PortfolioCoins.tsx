import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { Plus } from '../../assets/Plus'
import { Search } from '../../assets/Search'
import { ASSET_IMAGE_MAP, DEFAULT_ASSETS } from '../../constants'

import { toggleAssetModal } from '../../store/actions/utils'
import { MainAsset } from '../../store/actions/assets/types'
import { filteredAssets, parsePrice, parseToBtc } from './utils'

import styles from './PortfolioCoins.module.scss'

const PortfolioCoins = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  const _selectedAssets = useSelector<RootState, Array<MainAsset>>(state => state.assets)
  const [selectedAssets, setAssets] = useState(_selectedAssets)
  const btcToUsd = useSelector<RootState, number>(state => state.utils.btcToUsd)


  useEffect(() => {
    setAssets(_selectedAssets)
  }, [_selectedAssets])


  useEffect(() => {
    if(searchTerm) {
      const filtered = filteredAssets(selectedAssets, searchTerm)
      setAssets(filtered)
    } else {
      setAssets(_selectedAssets)
    }
  }, [searchTerm])

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
          onChange={(e) => setSearchTerm(e.target.value)}
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
      <div role="button" className={styles.addAsset} onClick={() => dispatch(toggleAssetModal())}>
        <Plus />
        <span>Add Asset</span>
      </div>
    </>
  )
}


export default PortfolioCoins