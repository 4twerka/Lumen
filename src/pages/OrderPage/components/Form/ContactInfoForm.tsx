import { Box, TextField } from '@mui/material'
import React from 'react'
import FormTitle from './FormTitle'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import ErrorMessage from '../../../../components/ErrorMessage/ErrorMessage'
import { order } from '../../../../types' 

interface ContactInfoFormProps {
    control: Control<order>;
      errors: FieldErrors<order>;
}

const ContactInfoForm:React.FC<ContactInfoFormProps> = ({control, errors}) => {
  return (
    <Box>
        <FormTitle>1. Контактна інформація</FormTitle>
        {/* <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{
                marginTop: "1rem",
                width: "100%",
                borderRadius: "8px",
                "& .MuiInputBase-root": { padding: "36px 24px" },
              }}
              placeholder="john@email.com"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LetterIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          padding: "16px 18px",
                          color: "#73270D",
                          cursor: "pointer",
                        }}
                      >
                        Log Out
                      </Typography>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        /> */}
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "1rem",
            paddingTop: "1rem",
          }}
        >
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: "Введіть ім'я",
              minLength: { value: 2, message: "Мінімум 2 символи" },
            }}
            render={({ field }) => (
              <div>
                <TextField {...field} label={renderLabel("Ім'я")} fullWidth />
                <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
              </div>
            )}
          />
          <Controller
            name="lastname"
            control={control}
            rules={{ required: "Введіть прізвище" }}
            render={({ field }) => (
              <div>
                <TextField
                  {...field}
                  label={renderLabel("Прізвище")}
                  fullWidth
                />
                <ErrorMessage>{errors.lastname?.message}</ErrorMessage>
              </div>
            )}
          />
          <Controller
            name="telephone"
            control={control}
            rules={{ required: "Введіть номер телефону" }}
            render={({ field }) => (
              <div>
                <TextField
                  {...field}
                  label={renderLabel("Номер телефону")}
                  fullWidth
                />
                <ErrorMessage>{errors.telephone?.message}</ErrorMessage>
              </div>
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Введіть e-mail",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Некоректний e-mail",
              },
            }}
            render={({ field }) => (
              <div>
                <TextField {...field} label={renderLabel("E-mail")} fullWidth />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </div>
            )}
          />
        </Box>
      </Box>
  )
}

const renderLabel = (name: string): React.ReactNode => (
    <span>
      {name} <span style={{ color: "red" }}>*</span>
    </span>
  );

export default ContactInfoForm
