import styled from "styled-components"

import Input from "./Input"
import Buttons from "./Buttons"

export default function Values({ handleSubmit, value1, value2, setValue1, setValue2, setType }) {
  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <p>Valor 1: </p>
      <div className="valores">
        <Input label="Valor" value={value1} setValue={setValue1} />
        <p style={{ margin: "0" }}>±</p>
        <Input label="Incerteza" value={value1} setValue={setValue1} />
      </div>

      <p>Valor 2: </p>
      <div className="valores">
        <Input label="Valor" value={value2} setValue={setValue2} />
        <p style={{ margin: "0" }}>±</p>
        <Input label="Incerteza" value={value2} setValue={setValue2} />
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
