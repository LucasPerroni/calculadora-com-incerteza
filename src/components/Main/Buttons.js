import * as React from "react"
import Box from "@mui/material/Box"
import Fab from "@mui/material/Fab"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import CloseIcon from "@mui/icons-material/Close"
import PercentIcon from "@mui/icons-material/Percent"

export default function Buttons({ setType }) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab onClick={() => setType("+")} type="submit" color="primary">
        <AddIcon />
      </Fab>
      <Fab onClick={() => setType("-")} type="submit" color="primary">
        <RemoveIcon />
      </Fab>
      <Fab onClick={() => setType("x")} type="submit" color="primary">
        <CloseIcon />
      </Fab>
      <Fab onClick={() => setType("/")} type="submit" color="primary">
        <PercentIcon />
      </Fab>
    </Box>
  )
}
