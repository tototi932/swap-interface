import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://bridgeswap.app/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://bridgeswap.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://bridgeswap.app/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://bridgeswap.app/lottery',
    // status: {
    //   text: 'WIN',
    //   color: 'warning',
    // },
  },
  {
    label: 'Referral Program',
    icon: 'ReferralIcon',
    href: 'https://bridgeswap.app/referral'
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
         href: 'https://www.coingecko.com/',
       },
       {
         label: 'Crypto.com',
         href: 'https://crypto.com/',
       },
       {
         label: 'DappRadar',
         href: 'https://dappradar.com/',
       },
       {
         label: 'Nomics',
         href: 'https://nomics.com/',
       },
     ],
   },
   {
     label: 'Network status',
     icon: 'IfoIcon',
     href: 'https://pancakeswap.finance/ifo',
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
         href: 'https://doge-gold-floki-finance.gitbook.io/dgf/',
       },
       {
         label: 'KYC',
         href: 'https://doge-gold-floki-finance.gitbook.io/dgf/',
       },
       {
         label: 'AUDIT',
         href: 'https://doge-gold-floki-finance.gitbook.io/dgf/',
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
