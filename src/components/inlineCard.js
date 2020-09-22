import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import styled from 'styled-components'

const StyledMiniCards = styled(Link)`
  padding: 1.25rem;
  color: ${({ theme, outlined }) => (outlined ? theme.colors.link : theme.textColor)};
  background-color: ${({ theme }) => theme.cardBG};
  height: 120px;
  max-width: 100%;
  min-width: 45%;
  width: 260px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  box-shadow: ${({ theme }) => theme.shadows.huge};

  border-radius: 12px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  will-change: transform;
  :hover {
    transform: scale(1.03);
  }

  @media (max-width: 960px) {
    width: 100%;
    max-width: 450px;
    margin-bottom: 0.25rem;
    height: ${({ small }) => !small && '120px'};
    /* height: 200px; */
  }
`
const StyledCardBG = styled(Img)`
  width: 80px;
  height: 220px;
  position: absolute !important;
  top: 0px;
  right: 0px;
  background-size: auto;
  background-position: center;
  z-index: -1;
`

const Tag = styled.p`
  position: absolute;
  top: 16px;
  right: 16px;
`

const StyledMiniCardHeader = styled.p`
  line-height: 130%;
  margin-top: 0px;
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Inter Roman';
`

const StyledMiniCardDesc = styled.p`
  font-size: 0.825rem;
  line-height: 140%;
  font-weight: 400;
  padding-bottom: 1.5rem;
`

const InlineCard = props => {
  return (
    <StyledMiniCards {...props} style={{ backgroundColor: props.backgroundColor, color: props.color }} to={props.to}>
      {props.image && <StyledCardBG fluid={props.image} />}
      <StyledMiniCardHeader style={{ color: props.color }}>{props.title}</StyledMiniCardHeader>
      <span>
        <StyledMiniCardDesc>{props.description || props.desc}</StyledMiniCardDesc>
        <Tag>{props.icon}</Tag>
        {/* {props.tag && <Tag tag={props.tag}>{props.tag}</Tag>} */}
      </span>
      {/* <StyledArrow>{'->'}</StyledArrow> */}
    </StyledMiniCards>
  )
}

export default InlineCard
