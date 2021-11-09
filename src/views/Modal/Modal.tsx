import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleAssetModal } from '../../store/actions/utils';
import styles from './Modal.module.scss'

type ModalProps = {
  onClose: () => void
}

const Modal = () => {
  const dispatch = useDispatch();
  const [assetList, setAssetList] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/list`)
      .then(res => res.json())
      .then((defaultAssets) => {
        const assets = defaultAssets.data.map(a => {
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
      <div className={styles.modalContent}>
          <span>List of assets that you can add</span>
          <div className={styles.list}>
            {assetList.map(asset => {
              return (
                <div key={asset.name} className={styles.assetRow}>
                  {asset.name}
                  <div role="button" className={styles.addAsset}>add</div>
                </div>
              )
            })}
          </div>
      </div>
    </div>
  )
}

export default Modal