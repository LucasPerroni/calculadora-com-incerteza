import * as React from "react"
import Box from "@mui/material/Box"
import Fab from "@mui/material/Fab"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import CloseIcon from "@mui/icons-material/Close"
import PercentIcon from "@mui/icons-material/Percent"
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep"

export default function Buttons({ setType }) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab onClick={() => setType("+")} type="submit" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab onClick={() => setType("-")} type="submit" color="primary" aria-label="add">
        <RemoveIcon />
      </Fab>
      <Fab onClick={() => setType("x")} type="submit" color="primary" aria-label="add">
        <CloseIcon />
      </Fab>
      <Fab onClick={() => setType("/")} type="submit" color="primary" aria-label="add">
        <PercentIcon />
      </Fab>
      <Fab onClick={() => setType("clear")} type="submit" color="secondary" aria-label="add">
        <DeleteSweepIcon />
      </Fab>
    </Box>
  )
}
