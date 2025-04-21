import { Typography } from '@mui/material'
import React from 'react'

const ProfileTitle:React.FC = () => {
  return (
    <Typography
        component={"h1"}
        sx={{
          display: {xs: 'none', md: 'block'},
          fontFamily: '"Kurale", san-serif',
          fontSize: { xs: "2.125rem", md: "3rem" },
          color: "#111111",
          fontWeight: 400,
          lineHeight: { xs: "2rem", md: "3rem" },
          paddingBottom: {xs: "32px", md: "40px"},
        }}
      >
        Мій профіль
      </Typography>
  )
}

export default ProfileTitle
