import React, { useEffect, useMemo, useState } from "react";
import Order from "./components/Order/Order";
import styles from "./Orders.module.css";
import ProfileSubTitle from "./components/ProfileSubTitle";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchOrders } from "../../store/slices/orderSlice";
import Loader from "../../components/Loader/Loader";
import { getPaginatedProducts } from "../../utils/getPaginatedArray";
import PagePagination from "../../components/PagePagination/PagePagination";
import ButtonGreen from "../../components/Buttons/ButtonGreen";
import { useNavigate } from "react-router";

const Orders: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const orders = useAppSelector((state) => state.order.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const isLoading = useAppSelector((state) => state.order.isLoading);
  const paginatedOrders = useMemo(
    () => getPaginatedProducts(orders, 2),
    [orders]
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleChangePage = (_: unknown, page: number) => {
    setCurrentPage(page);
  };

  const handleNavigateCatalog = () => {
    navigate('/catalog')
  }

  return (
    <>
      <ProfileSubTitle>Мої замовлення</ProfileSubTitle>
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      ) : (
        orders.length > 0 ? (
            <>
            <div className={styles.ordersWrapper}>
              {paginatedOrders[currentPage - 1]?.map((order) => (
                <Order key={order._id} {...order} />
              ))}
            </div>
            <PagePagination
              currentPage={currentPage}
              handleChangePage={handleChangePage}
              paginatedArr={paginatedOrders}
            />
          </>
        ) : (
            <div className={styles.noOrdersWrapper}>
                <p className={styles.noOrdersText}>Поки що замовлень немає</p>
                <ButtonGreen className={styles.btnNoOrders} onClick={handleNavigateCatalog}>Оберіть щось особливе</ButtonGreen>
            </div>
        )
   
      )}
    </>
  );
};

export default Orders;
