import React, { useState } from 'react'
// import Img from 'gatsby-image'
// import { Link } from 'gatsby'
import InlineCard from './inlineCard'

import styled from 'styled-components'

const links = [
  {
    name: 'Swarms',
    sublinks: [
      {
        title: 'Gardens',
        link: '/docs/honeyswap/javascript-SDK/quick-start/',
        description: 'Working on the interface for interacting with the 1Hive DAO',
        tag: 'tutorial',
        icon: '🌻'
      },
      {
        title: 'Celeste',
        link: '/docs/honeyswap/core-concepts/flash-swaps/',
        description: 'Building a decentralized dispute resolution oracle based on Aragon Court',
        tag: 'guide',
        icon: '🌞'
      },
      {
        title: 'Pollen',
        link: '/docs/honeyswap/core-concepts/oracles/',
        description: 'Maintains an instance of Sourcecred for distributing Honey to contributors',
        icon: '🏵'
      },
      {
        title: 'Buzz',
        link: '/docs/honeyswap/core-concepts/oracles/',
        description: 'Working on crystalizing our message and cross-pollinating our ideas to the rest of the world',
        icon: '🐝'
      },
      {
        title: 'Flora',
        link: '/docs/honeyswap/core-concepts/oracles/',
        description: 'Working on developer and node operations to help community members to keep infrastructure up and running',
        icon: '🌺'
      },
      {
        title: 'Tulip',
        link: '/docs/honeyswap/smart-contract-integration/quick-start/',
        description: 'Working on Honeyswap, a fork of Uniswap v2 on xDai, and trading related infrastructure and products',
        tag: 'reference',
        icon: '🌷️'
      },
    ]
  },

  {
    name: 'Developers',
    sublinks: [
      {
        title: 'Getting started with the SDK',
        link: '/docs/honeyswap/javascript-SDK/quick-start/',
        description: 'A step-by-step guide to getting started building interfaces with Uniswap.',
        tag: 'tutorial',
        icon: '📌'
      },
      {
        title: 'Smart contract development',
        link: '/docs/honeyswap/smart-contract-integration/quick-start/',
        description: 'Simplify the process of integrating Uniswap into your project.',
        tag: 'reference',
        icon: '🖥️'
      },
      {
        title: 'Introduction to Flash Swaps',
        link: '/docs/honeyswap/core-concepts/flash-swaps/',
        description: 'Withdraw the reserves of any ERC20 token on Uniswap and execute arbitrary logic.',
        tag: 'guide',
        icon: '⚡'
      },
      {
        title: 'Introduction to Oracles',
        link: '/docs/honeyswap/core-concepts/oracles/',
        description: 'Highly decentralized, manipulation-resistant, on-chain price feeds.',
        icon: '🔮'
      }
    ]
  },
  {
    name: 'Traders',
    sublinks: [
      {
        title: 'Using the interface',
        link: '/docs/honeyswap/user-guide/',
        description: 'The comprehensive web app user guide.',
        tag: 'tutorial'
      },
      {
        title: 'Glossary',
        link: '/docs/honeyswap/protocol-overview/glossary',
        description: 'An overview of the terms used in these docs and on the interface',
        tag: 'reference'
      },
      {
        title: 'Understanding prices',
        link: '/docs/honeyswap/swaps/pricing/',
        description: 'How the interface calculates prices for swaps.',
        tag: 'guide'
      }
    ]
  },
  {
    name: 'Liquidity',
    sublinks: [
      {
        title: 'Anatomy of a Uniswap Pool',
        link: '/docs/honeyswap/pools',
        description: 'An overview of what a Uniswap liquidity pool.'
      },
      {
        title: 'Understanding Liquidity Returns',
        link: '/docs/honeyswap/pools/understanding-returns',
        description: 'Udnerstand the economics of your returns.'
      }
    ]
  },
  {
    name: 'Tokens',
    sublinks: [
      {
        title: 'Core Concepts',
        link: '/docs/honeyswap/protocol-overview',
        description: 'A high level technical overview of the Uniswap protocol.'
      }
    ]
  }
]

const StyledWizard = styled.div`
  color: ${({ theme, outlined }) => (outlined ? theme.colors.link : theme.textColor)};
  width: 100%;
  max-width: 720px;
  /* border: 1px solid ${({ theme }) => theme.colors.grey2}; */
  border-radius: 20px;
  /* overflow: hidden; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 960px) {
    width: 100%;
    max-width: 450px;
    margin: 1rem 0;
    /* height: ${({ small }) => !small && '200px'}; */
    /* height: 200px; */
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* padding: 1.5rem; */
  /* overflow-x: scroll;
  overflow-y: visible;
  *::-webkit-scrollbar {
    display: none;
  } */
`

const Wizard = () => {
  const [currentCategory] = useState('Swarms')

  return (
    <StyledWizard>
      <CardWrapper>
        {links
          .filter(category => {
            return category.name === currentCategory
          })
          .map(category => {
            return category.sublinks.map((sublink, i) => {
              return (
                <InlineCard
                  key={i}
                  title={sublink.title}
                  desc={sublink.description}
                  to={sublink.link}
                  tag={sublink.tag}
                  icon={sublink.icon}
                />
              )
            })
          })}
      </CardWrapper>
    </StyledWizard>
  )
}

export default Wizard
