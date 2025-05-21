import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks";
import { verifyEmail } from "../store/slices/userSlice";

const VerifyEmailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (id) {
      dispatch(verifyEmail(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (!isLoading) {
      if (error) {
        navigate("/login");
      } else {
        navigate("/");
      }
    }
  }, [navigate, error, isLoading]);

  return <h2>Підтвердження акаунта...</h2>;
};

export default VerifyEmailPage;
