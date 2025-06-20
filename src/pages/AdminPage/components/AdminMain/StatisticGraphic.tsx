import { Box, Typography } from "@mui/material";
import {
  AreaChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
} from "recharts";

const StatisticGraphic = ({
  data,
}: {
  data: { month: string; totalPrice: number; totalCreatedOrders: number }[];
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: "1.5rem 1rem",
        backgroundColor: "#F1F1F4",
        borderRadius: "0.5rem",
      }}
    >
      <Typography
        pb={"40px"}
        sx={{ fontWeight: 500, color: "#111111", fontSize: "1rem" }}
      >
        Графік продажів за обраний період
      </Typography>
      <Box sx={{ height: "214px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid />
            <XAxis dataKey="month" />
            <YAxis />
            <Area
              type="monotone"
              dataKey="totalPrice"
              stroke="#4CAF50"
              strokeWidth={3}
              fill="none"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default StatisticGraphic;
