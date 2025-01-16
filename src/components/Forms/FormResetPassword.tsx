import { InputLogin } from "../../components/InputLogin/InputLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mui/material";
import FormButtonSubmit from "./FormButtonSubmit";
import FormTitle from "./FormTitle";

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
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const emails = ["test@i.ua", "test1@i.ua", "test2@i.ua"];

  const onSubmit = (data: FormData) => {
    console.log(data);
    if (!emails.includes(data.emailForgott)) {
      setError("emailForgott", {
        type: "manual",
        message: "* Не існує такого email",
      });
    } else {
      console.log("запит відправлено");
      reset();
    }
  };

  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
      <FormTitle>Забули пароль</FormTitle>
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
          <FormButtonSubmit>Підтвердити</FormButtonSubmit>
        </Box>
      </Box>
    </Box>
  );
}

export default FormResetPassword;
