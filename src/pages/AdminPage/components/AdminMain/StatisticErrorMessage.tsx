import { Box, Typography } from "@mui/material";

const StatisticErrorMessage = ({ error }: { error: string }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: "2rem" }}>
        {error}
      </Typography>
    </Box>
  );
};

export default StatisticErrorMessage;
