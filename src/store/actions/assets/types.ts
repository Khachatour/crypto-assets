export type DefaultAssets = {
  [key: string]: MainAsset
} 

export type MainAsset = {
  name: string,
  price: number,
  symbol: string
}

type SET_DEFAULT_ASSETS = {
  type: 'SET_DEFAULT_ASSETS',
  value: DefaultAssets
}

export type ASSETS_ACTIONS = SET_DEFAULT_ASSETS