import React, { useEffect, useMemo, useState } from "react";
import Order from "./components/Order/Order";
import styles from "./Orders.module.css";
import ProfileSubTitle from "./components/ProfileSubTitle";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchAdminsOrders, fetchOrders } from "../../store/slices/orderSlice";
import Loader from "../../components/Loader/Loader";
import { getPaginatedProducts } from "../../utils/getPaginatedArray";
import PagePagination from "../../components/PagePagination/PagePagination";
import ButtonGreen from "../../components/Buttons/ButtonGreen";
import { useNavigate } from "react-router";
import { OrderStatus } from "../../types";
import AdminFormOrders from "./components/AdminFormOrders";

const Orders: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const orders = useAppSelector((state) => state.order.orders);
  const user = useAppSelector((state) => state.user.user);
  const userRole = user?.role;
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortStatus, setSortStatus] = useState<keyof typeof OrderStatus | "">(
    ""
  );
  const [sortDate, setSortDate] = useState<"old" | "new" | "">("");

  useEffect(() => {
    if (userRole === "admin") {
      dispatch(fetchAdminsOrders());
    } else {
      dispatch(fetchOrders());
    }
  }, [dispatch, userRole]);

  const filteredOrders = useMemo(() => {
    const normalizedValue = searchValue.toLowerCase();

    const filtered = orders.filter((order) => {
      const matchesSearch =
        searchValue.length < 2 ||
        order.firstName.toLowerCase().includes(normalizedValue) ||
        order.lastName.toLowerCase().includes(normalizedValue) ||
        order.phoneNumber.includes(normalizedValue) ||
        order.code.includes(normalizedValue);

      const matchesStatus = !sortStatus || order.status === sortStatus;

      return matchesSearch && matchesStatus;
    });
    if (sortDate === "new") {
      return filtered.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
    } else if (sortDate === "old") {
      return filtered.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
    } else {
      return filtered;
    }
  }, [orders, searchValue, sortStatus, sortDate]);

  const isLoading = useAppSelector((state) => state.order.isLoading);
  const paginatedOrders = useMemo(
    () => getPaginatedProducts(filteredOrders, 2),
    [filteredOrders]
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleChangePage = (_: unknown, page: number) => {
    setCurrentPage(page);
  };

  const handleNavigateCatalog = () => {
    navigate("/catalog");
  };

  return (
    <>
      <ProfileSubTitle>Мої замовлення</ProfileSubTitle>
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      ) : orders.length > 0 ? (
        <>
          {userRole === "admin" && (
            <AdminFormOrders
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setSortDate={setSortDate}
              sortDate={sortDate}
              setSortStatus={setSortStatus}
              sortStatus={sortStatus}
            />
          )}
          <div className={styles.ordersWrapper}>
            {paginatedOrders[currentPage - 1]?.map((order) => (
              <Order key={order._id} {...order} search={searchValue} />
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
          <ButtonGreen
            className={styles.btnNoOrders}
            onClick={handleNavigateCatalog}
          >
            Оберіть щось особливе
          </ButtonGreen>
        </div>
      )}
    </>
  );
};

export default Orders;
