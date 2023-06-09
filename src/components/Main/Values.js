import styled from "styled-components"

import Input from "./Input"
import Buttons from "./Buttons"
import Exponentiation from "./Exponentiation"

export default function Values({ handleSubmit, value1, value2, setValue1, setValue2, type, setType }) {
  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <div className="buttons">
        <Exponentiation setType={setType} />
      </div>

      <p>Valor 1: </p>
      <div className="valores">
        <Input label="Valor" value={value1} setValue={setValue1} type={type} />
        <p style={{ margin: "0" }}>±</p>
        <Input label="Incerteza" value={value1} setValue={setValue1} type={type} />
      </div>

      <p>Valor 2: </p>
      <div className="valores">
        <Input label="Valor" value={value2} setValue={setValue2} type={type} />
        <p style={{ margin: "0" }}>±</p>
        <Input label="Incerteza" value={value2} setValue={setValue2} type={type} />
      </div>

      <div className="buttons" style={{ margin: "30px 0" }}>
        <Buttons setType={setType} />
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
