import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { Control, Controller } from 'react-hook-form';
import RenderRadioLabel from './RenderRadioLabel/RenderRadioLabel';
import FormTitle from './FormTitle';
import { order } from '../../../../types';

interface PaymentMethodFormProps {
    control: Control<order>
}

const PaymentMethodForm:React.FC<PaymentMethodFormProps> = ({control}) => {
  return (
    <Box>
        <FormTitle>3. Метод оплати</FormTitle>
      <Controller
          name="payment"
          control={control}
          rules={{ required: "Оберіть спосіб доставки" }}
          render={({ field }) => (
            <RadioGroup
              {...field}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                field.onChange(e.target.value)
              }}
            >
              <FormControlLabel
                sx={{ "& .MuiFormControlLabel-label": { flexGrow: 1 } }}
                value="cash"
                label={
                  <RenderRadioLabel
                    {...{
                      title: "Готівка при доставці",
                      desc: "Зверніть увагу, що Нова пошта стягує комісію 20 грн + 2% від загальної суми замовлення",
                    }}
                  />
                }
                control={<Radio size="small" />}
              />
              <FormControlLabel
                sx={{ "& .MuiFormControlLabel-label": { flexGrow: 1 } }}
                value="online payment"
                label={
                  <RenderRadioLabel
                    {...{
                      title: "Картою Visa/Mastercard",
                    }}
                  />
                }
                control={<Radio size="small" />}
              />
            </RadioGroup>
          )}
        />
    </Box>
  )
}

export default PaymentMethodForm
