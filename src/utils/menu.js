const menu = [
  {
    name: '1hive Projects',
    sublinks: [
      {
        name: 'Honeypot',
        link: 'https://1hive.org',
        description: 'The DAO proposals'// - Create and stake on proposals'
      },
      {
        name: 'Honey Faucet',
        link: 'https://faucet.1hive.org/',
        description: 'Claim free honey'// - Register with BrightId to claim Honey'
      },
      {
        name: 'Honeyswap',
        link: 'https://honeyswap.org/',
        description: 'Decentralized exchange' //Swap & Supply Liquidity - Swap tokens and supply liquidity. Create new pools'
      },
      {
        name: 'Honeycomb',
        link: 'https://hny.farm/',
        description: 'Yield farming'// - Stake Honeyswap LP tokens to claim Honey.'
      }
    ]
  },
  {
    name: 'External Apps',
    sublinks: [
      {
        name: 'BrightID',
        link: 'https://www.brightid.org/',
        description: 'Verify here'
      },
      {
        name: 'OmniBridge',
        link: 'https://omni.xdaichain.com/',
        description: 'Bridge any ERC20 to xDai'
      },
      {
        name: 'Blockscout',
        link: 'https://blockscout.com/poa/xdai/',
        description: 'xDai chain analytics'
      }, 
    ]
  },
  {
    name: 'Info',
    sublinks: [
      {
        name: '1hive Handbook',
        link: '/docs/dao',
        description: 'Learn about 1hive and how to contribute'
      },
      {
        name: 'Honeyswap Docs',
        link: '/docs/honeyswap',
        description: 'Technical concepts'
      },
      {
        name: 'Honeyswap Analytics',
        link: 'https://info.honeyswap.org',
        description: 'Market Analytics'// - In depth Honeyswap market data.'
      },
      {
        name: 'Blog',
        link: '/blog'
      },
      { 
        name: 'FAQ', 
        link: '/faq'
      },
    ]
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Github', link: 'https://github.com/1hive' },
      { name: 'Discord', link: 'https://discord.gg/NTDBRNz' },
      { name: 'Discourse', link: 'https://forum.1hive.org' },
      { name: 'Twitter', link: 'https://twitter.com/1hiveorg' },
      { name: 'Telegram', link: 'https://t.me/honeyswapDEX' }
    ]
  },
]

module.exports = menu
