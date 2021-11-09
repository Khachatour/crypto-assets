type CHANGE_TAB_ACTION = {
  type: 'CHANGE_TAB',
  value: string
}

type SET_BTC_TO_USD = {
  type: 'SET_BTC_TO_USD',
  value: number
}

type TOGGLE_ASSET_MODAL = {
  type: 'TOGGLE_ASSET_MODAL'
}

type SET_MORE_ASSETS = {
  type: 'SET_MORE_ASSETS',
  value: Array<string>
}

export type UTILS_ACTIONS = CHANGE_TAB_ACTION | SET_BTC_TO_USD | TOGGLE_ASSET_MODAL | SET_MORE_ASSETS