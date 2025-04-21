import { Box, Typography } from "@mui/material";
import React from "react";
import DoneIcon from "../../assets/Done.svg?react";
import ButtonBack from "../../components/ButtonBack";
import { useNavigate } from "react-router";

const ThanksOrderPage: React.FC = () => {
    const navigate = useNavigate();
  return (
    <Box
      className={'container'}
      sx={{
        width: "100%",
        padding: { xs: "16px 16px", md: "80px 80px" },
        backgroundColor: "#FCFCFC",
      }}
    >
      <ButtonBack onClick={() => navigate(-1)} />
      <Box
        sx={{
          pt: '24px',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "40px 48px",
            textAlign: "center",
            maxWidth: "574px",
            boxShadow: "0px 8px 14px 0px rgba(0, 0, 0, 0.05)",
            borderRadius: "1.5rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Kurale", serif',
              fontWeight: 400,
              fontSize: "2rem",
              lineHeight: "3rem",
              color: "#111111",
            }}
          >
            Thank you for your order!
          </Typography>
          <Typography
            sx={{
              color: "#2E2E2E",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: "1.5rem",
            }}
          >
            Your request has been successfully processed. Our team will contact
            you shortly to confirm the details and arrange delivery.
          </Typography>
          <Box>
            <DoneIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThanksOrderPage;
