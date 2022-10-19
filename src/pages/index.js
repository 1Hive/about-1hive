import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import MiniCard from '../components/minicard'
import Wizard from '../components/wizard'
import { Button } from '../components/button'

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  will-change: transform;
  margin: 3rem 0 4rem 0;
  @media (max-width: 960px) {
    margin: 3rem 0 1rem 0;
  }
`

const StyledBodyTitle = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 104px;
  margin: 4rem 0 3rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Inferi Normal', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 4rem;
    line-height: 4.5rem;
    margin: 2rem 0 2rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 400;
  }
`

const StyledUnicornImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 450px;
  background-color: none;
  margin-top: 1rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) {
    min-width: unset;
  }
`

const StyledSectionFlex = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* max-width: 650px; */
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-top: 0rem;
    width: 100%;
    max-width: 450px;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      unicornImage: file(relativePath: { eq: "fluid.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      swap: file(relativePath: { eq: "swap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      info: file(relativePath: { eq: "info.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BG />
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'1Hive is a DAO that issues and distributes a digital currency called Honey.'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>Together we thrive.</StyledBodyTitle>
          <span>
            <Button href="https://gardens.1hive.org/#/xdai/garden/0x8ccbeab14b5ac4a431fffc39f4bec4089020a155" target="_blank" rel="noopener noreferer">Open DAO</Button>
            <Button href="https://wiki.1hive.org/" target="_blank" rel="noopener noreferer" outlined>
              1Hive Wiki
            </Button>
          </span>
        </StyledTitle>
        <SummarySection data={data} />
        <ProductsSection data={data} />
        <GoalSection />
      </StyledBody>
    </Layout>
  )
}

export default IndexPage

const StyledImgSection = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  margin: 1rem 3rem;
  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
    p {
      max-width: 450px;
    }
    h1 {
      max-width: 450px;
    }
  }
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 450px;
  }
  h1 {
    max-width: 450px;
    line-height: 1.3;
  }
  h2 {
    max-width: 450px;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`

const MiniNewInfo = styled.a`
  transform: rotate(-4deg) scale(0.98);
  color: ${({ theme }) => theme.textColor};
  display: inline-block;
  height: 500px;

  transition: transform 0.3s ease;
  will-change: transform;
  :hover {
    transform: rotate(-2deg);
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    position: relative;
    max-width: 450px;
    width: 100%;
    height: 100%;
    margin: 4rem 0;
  }
`

const NewPill = styled.span`
  float: left;
  color: ${({ theme }) => theme.invertedTextColor};
  background-color: ${({ theme }) => theme.textColor};
  padding: 0rem 0.75rem;
  border-radius: 0.5em;
  text-align: center;
  margin: 0;
  margin-right: 1rem;
  font-weight: 400;
`

const LinkTitle = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
`

const StyledSectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 48px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Inferi Normal', 'Times New Roman', serif;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 4rem;
  }
  @media (max-width: 375px) {
    width: 100%;
    font-weight: 400;
    margin-top: 4rem;
  }
`

const SummarySection = props => {
  return (
    <StyledSectionFlex>
      <StyledImgSection>
        <MiniNewInfo href="https://gardens.mirror.xyz/IFcvWIZk3tHaPOoTzKFcU9azEMt_yuxCFJIc2NijbLI" target="_blank">
          <NewPill>
            <LinkTitle>Fluid Proposals</LinkTitle> Pilot
          </NewPill>
          Read the announcement ↗
          <StyledUnicornImage fadeIn={false} fluid={props.data.unicornImage.childImageSharp.fluid} />
        </MiniNewInfo>
      </StyledImgSection>
      <StyledImgSection>
        <h1>
          <b>1Hive</b> is a DAO that issues and distributes a digital currency called Honey.
        </h1>

        <p>
          Honey holders stake on proposals using <b>Conviction Voting</b> to determine how issuance is distributed. By supporting proposals which increase the value of Honey, a positive feedback loop drives growth and sustainability.
        </p>

        <p>
          Conviction Voting allows everyone to participate and shape the direction of 1Hive, while preventing anyone from taking control or ownership.
        </p>

        <Button as={Link} outlined to="/docs/dao">
          Read more
        </Button>
      </StyledImgSection>
    </StyledSectionFlex>
  )
}

const DeveloperSection = () => {
  return (
    <>
      <StyledSectionTitle>Contributor Swarms</StyledSectionTitle>
      <StyledSectionFlex style={{ paddingBottom: '0px', paddingTop: '1rem' }}>
        <Wizard />
      </StyledSectionFlex>
    </>
  )
}

const ProductsSection = props => {
  return (
    <>
      <StyledSectionFlex style={{ paddingBottom: '0px' }}>
        <StyledGoal style={{ width: '100%', maxWidth: '650px' }}>
          <h1>In Bloom</h1>
          <p>Check out some of these sweet applications and experimental products being worked on by 1Hive community members</p>
        </StyledGoal>
      </StyledSectionFlex>
       <StyledSectionFlex wrapSmall={false} style={{ paddingTop: '2rem' }}>
        
          <MiniCard
            href="https://gardens.1hive.org/#/home"
            target="_blank"
            rel="noopener noreferer"
            title={'Gardens 🌻'}
            desc={`A framework for a new kind of DAO.`}
            backgroundColor={'#71EEB8'}
            color={'black'}
          />
          <MiniCard
            href="https://celeste.1hive.org/#/"
            target="_blank"
            rel="noopener noreferer"
            title={'Celeste 🌞'}
            desc={'A subjective oracle used to resolve disputes.'}
            backgroundColor={'#FFA581'}
            color={'black'}
          />
          <MiniCard
            href="https://www.youtube.com/channel/UCg0yASRY6TmXDryitYvsJOQ"
            target="_blank"
            rel="noopener noreferer"
            title={'1Hive TV 📺'}
            desc={'YouTube channel for info and entertainment.'}
            backgroundColor={'#FFDD0F'}
            color={'black'}
          />
          <MiniCard
            href="https://honeyswap.org"
            target="_blank"
            rel="noopener noreferer"
            title={'Honeyswap 🌷️'}
            desc={'Swap tokens. Add liquidity. Create new pools.'}
            backgroundColor={'#AAF5D4'}
            color={'black'}
          />
          <MiniCard
            href="https://quests.1hive.org"
            target="_blank"
            rel="noopener noreferer"
            title={'Quests 🌟'}
            desc={`Celeste enabled incentivised bounty platform.`}
            backgroundColor={'#F7F7CE'}
            color={'black'}
          />      
       
      </StyledSectionFlex>
    </>
  )
}

const StyledGoal = styled.div`
  color: ${({ theme }) => theme.colors.link};
  border-radius: 0.5rem;
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 650px;
  }
  @media (max-width: 960px) {
    margin-top: 2rem;
    p {
      max-width: 450px;
    }
  }
`

const GoalSection = () => {
  return (
    <StyledSectionFlex style={{ paddingBottom: '0px' }}>
      <StyledGoal>
        <h1>Vision</h1>
        <p>
          <b>1Hive</b> seeks to realize a future that is more free, fair, open, and humane.
        </p>
        <p>
          To do so we need to create an economic engine that can <b>effectively and sustainably fund public goods</b>.
        </p>
        <p>
          By working together to make Honey valuable and then continuously distributing it towards public goods we can create a better future for everyone to enjoy.
        </p>
      </StyledGoal>
    </StyledSectionFlex>
  )
}
