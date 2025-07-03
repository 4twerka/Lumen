import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import OrderDetailsTitle from "./components/OrderDetailsTitle";
import OrderSelect from "../AdminOrders/components/OrderSelect";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { fetchAdminsOrderById } from "../../../../store/slices/orderSlice";
import { useNavigate, useParams } from "react-router";
import Loader from "../../../../components/Loader/Loader";
import { formatDate } from "../AdminOrders/helpers/formatDate";
import { getNextAvailableStatuses } from "../AdminOrders/helpers/getNextAvailableStatuses";
import { OrderStatus } from "../../../../types";
import OrderNoSelect from "../AdminOrders/components/OrderNoSelect";
import CustomerData from "./components/CustomerData";
import DeliveryData from "./components/DeliveryData";
import CustomerProducts from "./components/CustomerProducts";
import CustomerComment from "./components/CustomerComment";
import BreadcrumbsAdminOrdersDetails from "../BreadcrumbsAdminPage/BreadcrumbsAdminOrdersDetails";
import ButtonBackArrowOutlined from "../../../../components/Buttons/ButtonBackArrowOutlined";
import EditDeliveryData from "./components/EditDeliveryData";

const AdminOrderDetails = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { adminOrder, isLoading } = useAppSelector((state) => state.order);
  const navigate = useNavigate();
  const nextStatuses = getNextAvailableStatuses(
    adminOrder?.status as keyof typeof OrderStatus
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchAdminsOrderById(id));
    }
  }, [dispatch, id]);
  
  const [isEditMode, setIsEditMode] = useState(false);

  if (isLoading || !adminOrder) {
    return (
      <Box
        sx={{
          height: "calc(100vh - 50%)",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: '100%' }}>
      <BreadcrumbsAdminOrdersDetails />
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: "1.5rem",
          pb: "1.5rem",
        }}
      >
        <OrderDetailsTitle>
          Деталі замовлення № {adminOrder?.code}
        </OrderDetailsTitle>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
            width: { xs: "100%", md: "fit-content" },
          }}
        >
          <Typography
            sx={{ color: "#111111", fontSize: "0.875rem", fontWeight: 400 }}
          >
            Створено: {formatDate(adminOrder?.created)}
          </Typography>
          {nextStatuses.length > 0 ? (
            <OrderSelect
              id={adminOrder?._id}
              nextStatuses={nextStatuses}
              status={adminOrder?.status}
            />
          ) : (
            <OrderNoSelect status={adminOrder?.status} />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "1.5rem",
        }}
      >
        <CustomerData {...adminOrder} />
        {isEditMode ? <EditDeliveryData setIsEditMode={setIsEditMode} /> : <DeliveryData setIsEditMode={setIsEditMode} adminOrder={adminOrder} />}
      </Box>
      <CustomerProducts {...adminOrder} />
      <CustomerComment {...adminOrder} />
      <ButtonBackArrowOutlined onClick={() => navigate('/admin/orders')} sx={{ alignSelf: "end", mt: "1.5rem" }}>
        Назад до замовлень
      </ButtonBackArrowOutlined>
    </Box>
  );
};

export default AdminOrderDetails;
