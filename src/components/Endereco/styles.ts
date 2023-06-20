import { styled } from 'styled-components'

export const Container = styled.div`
  margin-top: 10rem;
  margin-left: 12rem;

  display: flex;
  gap: 1rem;
`

export const SpanEndereco = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  span {
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }
`

export const Endereco = styled.div`
  position: relative;
  width: 50%;
  background-color: ${(props) => props.theme['--white-400']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
  justify-content: center;

  margin-top: 1rem;

  input {
    height: 3rem;
  }

  .imageMap {
    margin-left: 3rem;
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-top: 2rem;
  }
`
