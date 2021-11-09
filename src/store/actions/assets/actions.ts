import { Dispatch } from "../../types";
import { DefaultAssets } from "./types";

export const setDefaultAssets = (defaultAssets: DefaultAssets) => (dispatch: Dispatch) => {
  dispatch({
    type: "SET_BTC_TO_USD",
    value: defaultAssets.BTC.price,
  });

  dispatch({
    type: 'SET_DEFAULT_ASSETS',
    value: defaultAssets
  })
};