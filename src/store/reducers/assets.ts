import { ASSETS_ACTIONS, DefaultAssets } from "../actions/assets/types";

const initialState = [] as Array<DefaultAssets>

const reducer = (state = initialState, action: ASSETS_ACTIONS) => {
  switch (action.type) {
    case 'SET_DEFAULT_ASSETS':
      const { value } = action
      const data = Object.keys(value).map(key => value[key])

      return data;
    default: return state;
  }
};

export default reducer;