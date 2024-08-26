import { BookmarkAdd, BookmarkAddOutlined, Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, Card, Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react'

export default function MaterialUiExample2() {
const [isReact,setIsReact] = useState(false);
const [isNode,setIsNode] = useState(false);

  return (
    <Box sx={{'& .MuiCheckbox-root' :{color:'red'}}}>
        <FormControlLabel control={<Checkbox checked={isReact} icon={<FavoriteBorder/>} onChange={(e)=>setIsReact(!isReact)} checkedIcon={<Favorite/>} sx={{fill:"red"}} />} label="React" sx={{m : 2}} />   
        <FormControlLabel control={<Checkbox checked={isNode} icon={<BookmarkAddOutlined/>} onChange={(e)=>setIsNode(!isNode)} checkedIcon={<BookmarkAdd/>} />} label="Node js" sx={{m : 2}} />   
    </Box>
  )
}