import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"

export default function Input({ label, value, setValue }) {
  function handleChange(e) {
    label === "Valor"
      ? setValue({ ...value, valor: Number(e.target.value) })
      : setValue({ ...value, incerteza: Number(e.target.value) })
  }

  

  return (
    <Box
      component="form"
      onSubmitCapture={(e) => e.preventDefault()}
      sx={{
        "& > :not(style)": { m: 1, width: "20ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextFiledStyled
        id="outlined-basic"
        label={label}
        variant="outlined"
        type="number"
        onChange={(e) => handleChange(e)}
      />
    </Box>
  )
}

const TextFiledStyled = styled(TextField)({
  "& label.Mui-focused, &:hover label": {
    color: "var(--input-focused)",
  },
  "& label": {
    color: "white",
    fontSize: "16",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--input-focused)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "var(--input-focused)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--input-focused)",
    },
  },
})
