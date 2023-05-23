import styled from "styled-components"

export default function Result({ value1, value2, type, resultado }) {
  return (
    <ResultTag className="resultado">
      <p>
        {value1.valor} ± {value1.incerteza}
      </p>
      <span> {type} </span>
      <p>
        {value2.valor} ± {value2.incerteza}
      </p>
      <span> = </span>
      <p>
        {resultado.valor} ± {resultado.incerteza}
      </p>
    </ResultTag>
  )
}

export const ResultTag = styled.div`
  display: flex;
  flex-direction: column;

  padding: 19px;
  border-radius: 15px;
  box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.5);

  max-width: 90%;

  p,
  span {
    color: white;
    text-align: center;
    font-weight: normal;
    font-size: 30px;
    margin: 5px 0;

    overflow-x: auto;
    overflow-y: hidden;
  }

  span {
    font-weight: bold;
  }
`
