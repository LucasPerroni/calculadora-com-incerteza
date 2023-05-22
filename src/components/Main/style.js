import styled from "styled-components"

export const MainTag = styled.main`
  position: absolute;
  width: 90%;
  height: 100%;
  overflow: auto;
  background-color: var(--background-color);

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 5%;
  padding: 40px 0 20px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    color: white;

    margin-bottom: 30px;
  }
`
