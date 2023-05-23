import * as React from "react"
import { useLocation, useNavigate } from "react-router-dom"

import Box from "@mui/material/Box"
import Fab from "@mui/material/Fab"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep"

export default function Exponentiation({ setType }) {
  const router = useNavigate()
  const location = useLocation()

  function handleClick(type) {
    if (location.pathname !== "/exponentiation") {
      router("/exponentiation")
    } else {
      setType(type)
    }
  }

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab onClick={() => handleClick("^")} type="submit" color="primary">
        <ExpandLessIcon />
      </Fab>
      <Fab onClick={() => handleClick("√")} type="submit" color="primary">
        √
      </Fab>
      <Fab onClick={() => setType("clear")} type="submit" color="secondary">
        <DeleteSweepIcon />
      </Fab>
    </Box>
  )
}
