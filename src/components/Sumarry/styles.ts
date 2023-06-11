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
  margin: 2.3rem 10rem;

  .imgAmpliada {
    height: 650px;
    width: 650px;
  }
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
`

export const SummaryIcons = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 2rem 1fr 2rem 1fr; /* Tamanho das colunas */
  grid-template-rows: 5rem; /* Duas linhas */
  grid-column-gap: 0.5rem; /* Espaçamento entre as colunas */
  align-items: center;

  max-width: 43.75rem;
  img {
    height: 2rem; /* Altura fixa para os ícones */
    width: 2rem; /* Preenche a largura da coluna */
  }
`

export const SummaryMain = styled.main`
  margin: auto 12rem;
  margin-top: 2rem;

  > span {
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }

  .itemsCoffee {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 1rem;
    column-gap: 4rem;
  }
`
