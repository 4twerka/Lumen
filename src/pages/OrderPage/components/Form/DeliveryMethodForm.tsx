import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react'
import FormTitle from './FormTitle';
import { Control, Controller } from 'react-hook-form';
import RenderRadioLabel from './RenderRadioLabel/RenderRadioLabel';
import { CreateOrder } from '../../../../types';

interface DeliveryMethodFormProps {
    control: Control<CreateOrder>;
    setIsNovaPost: (value: React.SetStateAction<'self_pickup' | 'nova_post'>) => void;
}

const DeliveryMethodForm:React.FC<DeliveryMethodFormProps> = ({control, setIsNovaPost}) => {
  return (
    <Box>
        <FormTitle>2. Метод доставки</FormTitle>
        <Controller
          name="deliveryMethod"
          control={control}
          rules={{ required: "Оберіть спосіб доставки" }}
          render={({ field }) => (
            <RadioGroup
              {...field}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setIsNovaPost(e.target.value as 'self_pickup' | 'nova_post');
                field.onChange(e.target.value);
              }}
            >
              <FormControlLabel
                sx={{ "& .MuiFormControlLabel-label": { flexGrow: 1 } }}
                value="nova_post"
                label={
                  <RenderRadioLabel
                    {...{
                      title: "Нова Пошта",
                      price: "від 50 грн",
                      desc: "3-5 днів",
                    }}
                  />
                }
                control={<Radio size="small" />}
              />
              <FormControlLabel
                sx={{ "& .MuiFormControlLabel-label": { flexGrow: 1 } }}
                value="self_pickup"
                label={
                  <RenderRadioLabel
                    {...{
                      title: "Самовивіз з магазину",
                      price: "0 грн",
                      desc: "від сьогодні",
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

export default DeliveryMethodForm
