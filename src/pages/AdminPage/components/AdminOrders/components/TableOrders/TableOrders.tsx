import React, { useEffect, useMemo, useState } from "react";
import styles from "./TableOrders.module.css";
// import { AdminOrder } from "../../../../../../types";
import TableOrder from "./TableOrder";
import { Box, Button } from "@mui/material";
import OrderMobile from "../OrdersMobile/OrderMobile";
import { useAppSelector } from "../../../../../../hooks";
import dayjs from "dayjs";
import PagePagination from "../../../../../../components/PagePagination/PagePagination";
import { getPaginatedProducts } from "../../../../../../utils/getPaginatedArray";
import { AdminOrder } from "../../../../../../types";

const buttonStyles = {
  fontWeight: 600,
  fontSize: "1rem",
  minWidth: "150px",
  height: "48px",
};

interface TableOrdersProps {
  searchValue: string;
  selectedDate: dayjs.Dayjs | null;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const TableOrders: React.FC<TableOrdersProps> = ({
  searchValue,
  selectedDate,
  currentPage,
  setCurrentPage
}) => {
  const adminOrders = useAppSelector((state) => state.order.adminOrders);
  const [displayProducts, setDisplayProducts] = useState<AdminOrder[][]>([])
  const filteredOrders = useMemo(() => {
    return adminOrders.filter((order) => {
      const searchLower = searchValue.toLowerCase();
      const code = order.code ?? "";
      const matchesSearch =
        order.firstName.toLowerCase().includes(searchLower) ||
        order.lastName.toLowerCase().includes(searchLower) ||
        code.toLowerCase().includes(searchLower);

      const orderDate = dayjs(order.created);

      const matchesDate = selectedDate
        ? orderDate.isSame(selectedDate, "day")
        : true;

      return matchesSearch && matchesDate;
    });
  }, [searchValue, selectedDate, adminOrders]);

  const paginatedFilteredArr = useMemo(() => {
    return getPaginatedProducts(filteredOrders, 9);
  }, [filteredOrders]);

  useEffect(() => {
    setDisplayProducts(paginatedFilteredArr)
  },[paginatedFilteredArr])

  const handleAddProducts = () => {
    if (currentPage < paginatedFilteredArr.length) {
      const updatedProducts = [...paginatedFilteredArr];
      updatedProducts[currentPage - 1] = [
        ...updatedProducts[currentPage - 1],
        ...updatedProducts[currentPage],
      ];
      updatedProducts.splice(currentPage, 1);
      setDisplayProducts(updatedProducts)
    }
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setCurrentPage(newPage)
  };
  
  return (
    <>
      <Box
        sx={{
          padding: { xs: "0.5rem 1rem", md: "1rem" },
          border: "1px solid #A3A3A3",
          borderRadius: "0.5rem",
        }}
      >
        <table className={styles.table}>
          <thead>
            <tr>
              <th>№ замовлення</th>
              <th>Покупець</th>
              <th>Дата</th>
              <th>Продукт</th>
              <th>Сума</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.retreat}></tr>
            {displayProducts[currentPage-1]?.map((order) => (
              <TableOrder key={order._id} order={order} />
            ))}
          </tbody>
        </table>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            "&>div": { borderBottom: "1px solid #A3A3A3" },
            "&>div:last-child": { border: "none" },
          }}
        >
          {displayProducts[currentPage-1]?.map((order) => (
            <OrderMobile key={order._id} order={order} />
          ))}
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", margin: "52px 0" }}>
        <Button
          sx={buttonStyles}
          color="secondary"
          variant="outlined"
          onClick={handleAddProducts}
        >
          Показати ще
        </Button>
      </Box>
      <PagePagination
          currentPage={currentPage}
          handleChangePage={handleChangePage}
          paginatedArr={displayProducts}
        />
    </>
  );
};

export default TableOrders;
