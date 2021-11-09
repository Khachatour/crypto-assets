import { RootState } from "../..";
import { Dispatch } from "../../types";
import { DefaultAssets } from "./types";
import { transformAssets } from "./utils";

const setDefaultAssets = (defaultAssets: DefaultAssets) => (dispatch: Dispatch) => {
  dispatch({
    type: "SET_BTC_TO_USD",
    value: defaultAssets.BTC.price,
  });

  dispatch({
    type: 'SET_DEFAULT_ASSETS',
    value: defaultAssets
  })
};

export const getAssets = ()=> (dispatch: Dispatch | (() => void), getState: () => RootState) => {
  const selectedAssets = getState().utils.assets;

  fetch(`http://localhost:5000/assets?symbols=${selectedAssets.join(',')}`)
    .then(res => res.json())
    .then((defaultAssets) => {
      const transformedAssets = transformAssets(selectedAssets, defaultAssets.data)
      //@ts-ignore
      dispatch(setDefaultAssets(transformedAssets))
    })
}