import bgSummary from '../../assets/backgroundSummary.svg'
import { styled } from 'styled-components'

export const SummaryBackground = styled.div`
  position: relative;
  width: 100%;
  height: 34rem;

  background-size: cover;
  background-position: center;
  background-image: url(${bgSummary});

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CoffeeLogo = styled.div`
  margin: auto 10rem;
  height: 360px;
`

export const SummaryText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 12rem;
  padding: 0;
  margin-top: 5.875rem;

  span {
    font-weight: 700;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme['--gray-900']};
  }

  > p {
    margin-top: 1rem;

    /* Text/Regular L */
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    /* or 26px */

    /* Base/Subtitle */

    color: ${(props) => props.theme['--gray-700']};
    font-stretch: 100;
  }

  div > p {
  }
`
