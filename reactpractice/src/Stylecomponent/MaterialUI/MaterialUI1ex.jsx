import { Delete, Edit } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'

export default function MaterialUI1ex() {
  return (
    <div>
        <button>Base UI Button</button>
        <Button>Material UI</Button>
        <Box sx={{'& button' : {m : 1, color : "green" , backgroundColor : "grey" , fontSize : 15}}}>
            <Button variant='text'>Text Button</Button>
            <Button variant='outlined'>Outline Button</Button>
            <Button variant='contained'>Contained Button</Button>
        </Box>

        <Box sx={{'& button' : {m : 1}}}>
            <Button variant='outlined' size='small' >Small</Button>
            <Button variant='outlined' size='medium'>Medium</Button>
            <Button variant='outlined' size='large'>Large</Button>
        </Box>

        <Box sx={{'& button' : {m : 1}}}>
            <Button variant='outlined' size='medium' startIcon={<Edit/>}>Edit</Button>
            <Button variant='outlined' size='medium' endIcon={<Delete/>}>Delete</Button>
        </Box>
    </div>
  )
}
