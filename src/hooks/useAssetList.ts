import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAssets } from "../store/actions/assets";

const useAssetList = () => {
  const dispatch = useDispatch()
  
  const fetchAssets = () => {
    dispatch(getAssets())
  }

  useEffect(() => {
    fetchAssets()

    const intervalId = setInterval(() => {
      fetchAssets()
    }, 5000)
    
    return () => clearInterval(intervalId)
  }, [])
}

export default useAssetList;