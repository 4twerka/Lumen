import { Typography } from '@mui/material';
import React from 'react';

interface FormTitleProps {
    children: string
}

const FormTitle:React.FC<FormTitleProps> = ({children}) => {

  return (
    <Typography sx={{color: 'text.primary', fontSize: '1.5rem', fontWeight: 600, lineHeight: '2.25rem'}}>
      {children}
    </Typography>
  )
}

export default FormTitle
