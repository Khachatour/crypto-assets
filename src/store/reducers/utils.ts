import { UTILS_ACTIONS } from "../actions/utils/types";

const TABS = {
  CRYPTO: 'crypto',
  REWARDS: 'rewards',
  CARDS: 'cards',
  ADD_EXCHANGE: 'add_exchange'
}

const initialState = {
  activeTab: TABS.CRYPTO,
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