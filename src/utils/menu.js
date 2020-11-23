const menu = [
  {
    name: '1hive Products',
    sublinks: [
      {
        name: 'Honeypot',
        link: 'https://1hive.org',
        description: 'DAO Governance'// - Create and stake on proposals'
      },
      {
        name: 'Honey Faucet',
        link: 'https://faucet.1hive.org/',
        description: 'Claim Free Honey'// - Register with BrightId to claim Honey'
      },
      {
        name: 'Honeyswap',
        link: 'https://honeyswap.org/',
        description: 'Decentralized Exchange' //Swap & Supply Liquidity - Swap tokens and supply liquidity. Create new pools'
      },
      {
        name: 'Honeycomb',
        link: 'https://hny.farm/',
        description: 'Yield Farming'// - Stake Honeyswap LP tokens to claim Honey.'
      }
    ]
  },
  {
    name: 'External Apps',
    sublinks: [
      {
        name: 'BrightID',
        link: 'https://www.brightid.org/',
        description: 'Verify for Faucet'
      },
      {
        name: 'MetaMask',
        link: 'https://metamask.io/',
        description: 'Crypto wallet'
      },
      {
        name: 'OmniBridge',
        link: 'https://omni.xdaichain.com/',
        description: 'Any ERC20 token bridge'
      },
      {
        name: 'Blockscout',
        link: 'https://blockscout.com/poa/xdai/',
        description: 'Analyze EVM blockchains'
      },
      {
        name: 'DeFi Pulse',
        link: 'https://defipulse.com/',
        description: 'DeFi analytics'// - Added to be listed on DeFi Pulse'
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
