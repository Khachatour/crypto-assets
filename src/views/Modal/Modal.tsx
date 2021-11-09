import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MainAsset } from '../../store/actions/assets/types';
import { setMoreAssets, toggleAssetModal } from '../../store/actions/utils';
import styles from './Modal.module.scss'

const Modal = () => {
  const dispatch = useDispatch();
  const [symbols, setSymbol] = useState<Array<string>>([])
  const [assetList, setAssetList] = useState<Array<MainAsset>>([])

  useEffect(() => {
    fetch(`http://localhost:5000/list`)
      .then(res => res.json())
      .then((defaultAssets) => {
        console.table("LOGGIN LIST ASSETS:", defaultAssets)
        const assets = defaultAssets.data.map((a: MainAsset) => {
          return {
            name: a.name,
            price: a.price,
            symbol: a.symbol
          }
        })
        setAssetList(assets)
      })
  }, [])

  return (
    <div className={styles.container} onClick={() => dispatch(toggleAssetModal())}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <span>List of assets that you can add</span>
          <div className={styles.list}>
            {assetList.map(asset => {
              return (
                <div key={asset.name} className={styles.assetRow}>
                  {asset.name}
                  <div role="button" className={styles.addAsset} onClick={() => setSymbol((oldSymbold) => {
                    return [...oldSymbold, asset.symbol]
                  })}>add</div>
                </div>
              )
            })}
          </div>
        <div role="button" className={styles.save} onClick={() => dispatch(setMoreAssets(symbols))}>Save</div>
      </div>
    </div>
  )
}

export default Modal