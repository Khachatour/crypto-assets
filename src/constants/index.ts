import btc from '../assets/icons/btc.svg'
import eth from '../assets/icons/eth.svg'
import bnb from '../assets/icons/binance.svg'
import bat from '../assets/icons/bat.svg'

export const TABS = {
  CRYPTO: 'crypto',
  REWARDS: 'rewards',
  CARDS: 'cards',
  ADD_EXCHANGE: 'add_exchange'
}

export const DEFAULT_ASSETS = {
  BTC: 'BTC', 
  ETH: 'ETH', 
  BNB: 'BNB', 
  BAT: 'BAT'
}

export const ASSET_IMAGE_MAP = {
  [DEFAULT_ASSETS.BTC]: btc,
  [DEFAULT_ASSETS.ETH]: eth,
  [DEFAULT_ASSETS.BNB]: bnb,
  [DEFAULT_ASSETS.BAT]: bat
}

export const ASSET_NAME_MAP = {
  [DEFAULT_ASSETS.BTC]: 'Bitcoin',
  [DEFAULT_ASSETS.ETH]: 'Ethereum',
  [DEFAULT_ASSETS.BNB]: 'Binance Coin',
  [DEFAULT_ASSETS.BAT]: 'Basic Attention Token'
}