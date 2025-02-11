import { CheckBox } from '@mui/icons-material'
import { ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

interface FilterOptionItemProps {
    option: string
}

const FilterOptionItem:React.FC<FilterOptionItemProps> = ({option}) => {
  return (
    <ListItemButton sx={{width: '100%'}}>
        <CheckBox />
        <ListItemText primary={option} />
    </ListItemButton>
  )
}

export default FilterOptionItem
