import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AdminMainButton from "./AdminMainButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import dayjs, { Dayjs } from "dayjs";
import CalendarIcon from "../../../../assets/Calendar.svg?react";
import { useAppDispatch } from "../../../../hooks";
import { fetchAdminsOrdersStatistics } from "../../../../store/slices/orderSlice";
import StatisticBox from "./StatisticBox";
import { AdminOrderStatistics } from "../../../../types";
import TopSales from "./TopSales";
import StatisticErrorMessage from "./StatisticErrorMessage";
import StatisticGraphic from "./StatisticGraphic";
import BreadcrumbsAdminMaim from "../BreadcrumbsAdminPage/BreadcrumbsAdminMain";

const AdminMain: React.FC = () => {
  const [date, setDate] = React.useState<DateRange<Dayjs>>([
    dayjs().subtract(1, "month"),
    dayjs(),
  ]);
  const [statistic, setStatistic] = React.useState<AdminOrderStatistics | null>(
    null
  );
  const [error, setError] = React.useState<string | null>(null);
  const [activePeriod, setActivePeriod] = React.useState<
    "day" | "week" | "month" | "year" | null
  >("month");
  const dispatch = useAppDispatch();

  const handleTime = (time: "day" | "week" | "month" | "year") => {
    const start = dayjs().subtract(1, time);
    const end = dayjs();
    setDate([start, end]);
    setActivePeriod(time);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!date[0] || !date[1]) return;
      try {
        const result = await dispatch(
          fetchAdminsOrdersStatistics({
            startDate: date[0]?.format("DD.MM.YYYY"),
            endDate: date[1]?.format("DD.MM.YYYY"),
          })
        ).unwrap();
        setStatistic(result as AdminOrderStatistics);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Помилка при отриманні статистики");
        }
      }
    };
    fetchData();
  }, [date, dispatch]);

  const statisticArray = statistic?.salesScheduleInfo.map((prod) => {
    return {
      month: dayjs(prod.date).format("MMMM"),
      totalPrice: prod.totalAmount,
      totalCreatedOrders: prod.totalCreatedOrders,
    };
  });

  const test = [
    { month: "january", totalPrice: 1000, totalCreatedOrders: 3 },
    { month: "february", totalPrice: 1500, totalCreatedOrders: 4 },
    { month: "march", totalPrice: 2000, totalCreatedOrders: 6 },
    { month: "april", totalPrice: 2000, totalCreatedOrders: 6 },
    { month: "april", totalPrice: 2600, totalCreatedOrders: 6 },
    { month: "may", totalPrice: 2400, totalCreatedOrders: 8 },
  ];

  const safeArray =
    statisticArray && statisticArray.length > 2 ? statisticArray : test;

  const merged = Object.values(
    safeArray.reduce((acc, curr) => {
      if (!acc[curr.month]) {
        acc[curr.month] = { ...curr };
      } else {
        acc[curr.month].totalPrice += curr.totalPrice;
        acc[curr.month].totalCreatedOrders += curr.totalCreatedOrders;
      }
      return acc;
    }, {} as Record<string, (typeof test)[0]>)
  );

  return (
    <>
      <BreadcrumbsAdminMaim />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pb: "24px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography
          component={"h3"}
          sx={{
            fontWeight: { xs: 500, md: 600 },
            fontSize: { xs: "1rem", md: "1.5rem" },
            lineHeight: "150%",
            color: "#111111",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Статистика
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "190px", md: "230px" },
              "& .MuiFormControl-root": {
                minWidth: { xs: "190px !important", md: "230px !important" },
              },
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateRangePicker"]}>
                <DateRangePicker
                  slots={{ openPickerIcon: CalendarIcon }}
                  sx={{
                    "& span": { fontSize: { xs: "0.75rem", md: "1rem" } },
                    "& fieldset": { border: "none" },
                    "& .MuiFormControl-root": {
                      minWidth: { xs: "190px", md: "230px" },
                    },
                  }}
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                    setActivePeriod(null);
                  }}
                  format="DD/MM/YY"
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <AdminMainButton
              isActive={activePeriod === "day"}
              onClick={() => handleTime("day")}
            >
              День
            </AdminMainButton>
            <AdminMainButton
              isActive={activePeriod === "week"}
              onClick={() => handleTime("week")}
            >
              Тиждень
            </AdminMainButton>
            <AdminMainButton
              isActive={activePeriod === "month"}
              onClick={() => handleTime("month")}
            >
              Місяць
            </AdminMainButton>
            <AdminMainButton
              isActive={activePeriod === "year"}
              onClick={() => handleTime("year")}
            >
              Рік
            </AdminMainButton>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1.5rem",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {error ? (
          <StatisticErrorMessage error={error} />
        ) : (
          <Box
            sx={{
              width: { xs: "100%", md: "65%" },
              display: "flex",
              gap: "1.5rem",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: "1.5rem",
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              <StatisticBox
                sx={{ width: { xs: "100%" } }}
                title="Всі замовлення"
                count={statistic?.totalOrdersNum.quantity ?? 0}
                price={statistic?.totalOrdersNum.amount ?? 0}
              />
              <StatisticBox
                title="Виконані"
                count={statistic?.completedOrdersNum.quantity ?? 0}
                price={statistic?.completedOrdersNum.amount ?? 0}
              />
              <StatisticBox
                title="Повернення"
                count={statistic?.returnedOrdersNum.quantity ?? 0}
                price={statistic?.returnedOrdersNum.amount ?? 0}
              />
            </Box>
            <StatisticGraphic data={merged} />
          </Box>
        )}
        <Box sx={{ width: { xs: "100%", md: "35%" } }}>
          <TopSales
            topSalesProducts={
              statistic?.mostPurchasedProducts.slice(0, 4) ?? []
            }
          />
        </Box>
      </Box>
    </>
  );
};

export default AdminMain;
