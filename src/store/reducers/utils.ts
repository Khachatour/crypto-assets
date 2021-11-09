import { DEFAULT_ASSETS, TABS } from "../../constants";
import { UTILS_ACTIONS } from "../actions/utils/types";

const initialState = {
  activeTab: TABS.CRYPTO,
  assets: [DEFAULT_ASSETS.BTC, DEFAULT_ASSETS.ETH, DEFAULT_ASSETS.BNB, DEFAULT_ASSETS.BAT]
}

const reducer = (state = initialState, action: UTILS_ACTIONS) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return {
        ...state, 
        activeTab: action.value,
      };
    default: return state;
  }
};

export default reducer;