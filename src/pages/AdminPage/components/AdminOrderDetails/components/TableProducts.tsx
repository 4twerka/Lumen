import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Product } from "../../../../../types";

type ProductWithQuantity = Product & { quantity: number };

interface TableProductsProps {
  userProductsInfo: ProductWithQuantity[];
}

const TableProducts: React.FC<TableProductsProps> = ({ userProductsInfo }) => {
  const totalPrice = userProductsInfo.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );


  return (
    <>
      <Table>
        <TableHead
          sx={{
            "& th": {
              fontSize: { xs: "0.75rem", md: "1rem" },
              fontWeight: 700,
            },
          }}
        >
          <TableRow>
            <TableCell align="left">Назва</TableCell>
            <TableCell align="center">Номер товару</TableCell>
            <TableCell align="center">Кількість</TableCell>
            <TableCell align="center">Колір</TableCell>
            <TableCell align="center">Розмір</TableCell>
            <TableCell align="center">Сума</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ "& td": { fontSize: { xs: "0.75rem", md: "1rem" } } }}>
          {userProductsInfo.map((product) => (
            <TableRow key={product._id}>
              <TableCell align="left">{product.title}</TableCell>
              <TableCell align="center">{product._id}</TableCell>
              <TableCell align="center">{product.quantity}</TableCell>
              <TableCell align="center">{product.color}</TableCell>
              <TableCell align="center">{product.size} см</TableCell>
              <TableCell align="center">
                {product.price * product.quantity} ₴
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: 700, color: "#111111" }}
            >
              Загальна сума
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: 700, color: "#111111" }}
            >
              {totalPrice} ₴
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default TableProducts;
