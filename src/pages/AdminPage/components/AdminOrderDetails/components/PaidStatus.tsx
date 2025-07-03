import { Typography } from "@mui/material";

const PaidRegisterStatus = ({ value, trueLabel, falseLabel }: { value: boolean, trueLabel: string, falseLabel: string }) => {
  return (
    <Typography
      sx={{
        p: "0.25rem 1rem",
        backgroundColor: value ? "#CAF2CB" : "#F8C7C7",
        borderRadius: "0.75rem",
        color: "#111111",
        fontSize: "0.875rem",
        fontWeight: 400,
        width: 'fit-content'
      }}
    >
      {value ? trueLabel : falseLabel}
    </Typography>
  );
};

export default PaidRegisterStatus;
