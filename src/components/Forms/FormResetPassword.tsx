import { InputLogin } from "../../components/InputLogin/InputLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";

const schema = yup
  .object({
    emailForgott: yup
      .string()
      .required("* Електронна пошта є обов'язковою!")
      .email("* Введіть коректну електронну пошту!"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

function FormResetPassword() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          textAlign: "center",
          mb: 4,
          mt: 6,
        }}
      >
        Забули пароль
      </Typography>
      <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            mb: "32px",
          }}
        >
          <InputLogin
            errors={errors}
            register={register}
            id="emailForgott"
            label="Email"
            type="text"
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              borderRadius: 2,
              backgroundColor: "#73270D",
              height: "56px",
              color: "#FDF5ED",
              fontWeight: 600,
            }}
          >
            Увійти
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FormResetPassword;
