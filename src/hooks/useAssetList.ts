import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setDefaultAssets } from "../store/actions/assets";

const transformAssets = (selectedAssets: string[], data: Record<string, any>) => {
  return selectedAssets.reduce((acc: Record<string, any>, key: string) => {
    return {...acc, [key]: {
     price: data[key].quote.USD.price,
     name: data[key].name,
     symbol: data[key].symbol
    }}
  }, {})
}

const useAssetList = () => {
  const dispatch = useDispatch()
  const selectedAssets = useSelector<RootState, string[]>(state => state.utils.assets)

  useEffect(() => {
    fetch(`http://localhost:5000/assets?symbols=${selectedAssets.join(',')}`)
      .then(res => res.json())
      .then((defaultAssets) => {
        const transformedAssets = transformAssets(selectedAssets, defaultAssets.data)
        dispatch(setDefaultAssets(transformedAssets))
      })
  }, [])
  
}


export default useAssetList;