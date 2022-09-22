import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.doge-gold-floki.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://dex.doge-gold-floki.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://dex.doge-gold-floki.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://app.doge-gold-floki.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://app.doge-gold-floki.finance/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://app.doge-gold-floki.finance/lottery',
    // status: {
    //   text: 'WIN',
    //   color: 'warning',
    // },
  },
  {
    label: 'Referral Program',
    icon: 'ReferralIcon',
    href: 'https://app.doge-gold-floki.finance/referral'
  },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: 'https://pancakeswap.finance/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
   {
     label: 'Listings',
     icon: 'InfoIcon',
     items: [
       {
         label: 'CoinMarketCap',
         href: 'https://coinmarketcap.com/',
       },
       {
         label: 'CoinGecko',
         href: 'https://www.coingecko.com/en/coins/doge-gold-floki',
       },
       {
         label: 'Crypto.com',
         href: 'https://crypto.com/price/ico-calendar/detail/Doge%20Gold%20Floki%20-486',
       },
       {
         label: 'DappRadar',
         href: 'https://dappradar.com/binance-smart-chain/high-risk/doge-gold-floki',
       },
       {
         label: 'Nomics',
         href:'https://nomics.com/assets/dgf2-doge-gold-floki/',
       },
     ],
   },
   {
     label: 'Home Website',
     icon: 'IfoIcon',
     href: 'https://doge-gold-floki.finance/',
   },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Whitepaper',
        href: 'https://doge-gold-floki-finance.gitbook.io/dgf/',
      },
       {
         label: 'SAFU',
         href: 'https://github.com/ContractChecker/SAFU/blob/main/DogeGoldFloki_0x7C22A844e3358DBB7c90B1A299E5C650B14CD21f_SAFU_Certificate_By_ContractChecker.pdf',
       },
       {
         label: 'KYC',
         href: 'https://www.autentk.com/projects/25',
       },
       {
         label: 'AUDIT',
         href: 'https://github.com/Coinsult/solidity/blob/main/DogeGoldFlokiAudit.pdf',
       },
      // {
      //   label: 'Docs',
      //   href: 'https://docs.bridgeswap.app',
      // },
      // {
      //   label: 'Blog',
      //   href: 'https://bridgeswap.medium.com/',
      // },
      // {
      //   label: 'Merch',
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
