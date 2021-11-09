export const parsePrice = (price: number) => {
  const parsedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return parsedValue
}

export const parseToBtc = (price: number, btcToUsd: number) => {
  return price / btcToUsd
}

export const filteredAssets = (assets: Array<any>, searchTerm: string) => {
  return assets.filter(asset => {
    return asset.name.toLowerCase().includes(searchTerm.toLowerCase());
  })
}