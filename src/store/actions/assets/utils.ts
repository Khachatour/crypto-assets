import { DefaultAssets } from "./types"

export const transformAssets = (selectedAssets: string[], data: Record<string, any>) => {
  return selectedAssets.reduce((acc: DefaultAssets, key: string) => {
    return {...acc, [key]: {
     price: data[key].quote.USD.price,
     name: data[key].name,
     symbol: data[key].symbol
    }}
  }, {})
}
