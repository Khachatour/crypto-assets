import { DEFAULT_ASSETS, TABS } from "../../constants";
import { UTILS_ACTIONS } from "../actions/utils/types";

const initialState = {
  activeTab: TABS.CRYPTO,
  assets: [DEFAULT_ASSETS.BTC, DEFAULT_ASSETS.ETH, DEFAULT_ASSETS.BNB, DEFAULT_ASSETS.BAT],
  btcToUsd: 1,
  assetModal: false
}

const reducer = (state = initialState, action: UTILS_ACTIONS) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return {
        ...state, 
        activeTab: action.value,
      };
      
    case 'SET_BTC_TO_USD':
      return {
        ...state, 
        btcToUsd: action.value,
      };

    case 'TOGGLE_ASSET_MODAL':
      return {
        ...state, 
        assetModal: !state.assetModal,
      };
    default: return state;
  }
};

export default reducer;