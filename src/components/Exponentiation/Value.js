import styled from "styled-components"

import Input from "../Main/Input"
import Exponentiation from "../Main/Exponentiation"

export default function Value({ handleSubmit, value, setValue, expoent, setExpoent, type, setType }) {
  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <div className="buttons">
        <Exponentiation setType={setType} />
      </div>

      <p>Valor: </p>
      <div className="valores">
        <Input label="Valor" value={value} setValue={setValue} type={type} />
        <p style={{ margin: "0" }}>±</p>
        <Input label="Incerteza" value={value} setValue={setValue} type={type} />
      </div>

      <p>Expoente/Índice: </p>
      <div className="valores">
        <Input label="Expoente/Índice" value={expoent} setValue={setExpoent} type={type} />
      </div>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    color: white;

    margin: 20px 0 10px;
  }

  @media (max-width: 700px) {
    .valores {
      flex-direction: column !important;
    }
  }
`
