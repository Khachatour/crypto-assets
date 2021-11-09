export const changeTab = (tab: string) => ({
  type: 'CHANGE_TAB',
  value: tab,
});

export const toggleAssetModal = () => ({
  type: 'TOGGLE_ASSET_MODAL'
})

export const setMoreAssets = (assets: Array<string>) => ({
  type: 'SET_MORE_ASSETS',
  value: assets
})