import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Autocomplete, Box, TextField } from "@mui/material";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";
import FormTitle from "./FormTitle";
import { API_NOVA_POST, API_NOVA_POST_URL } from "../../../../constants";
import _ from "lodash";
import { CreateOrder } from "../../../../types";
import styles from "../../../../components/ErrorMessage/ErrorMessage.module.css";

interface NovaPostCity {
  Description: string;
}

interface NovaPostDepartment {
  Description: string;
}

interface Shop {
  city: string;
  name: string;
}

interface PostFormProps {
  control: Control<CreateOrder>;
  errors: FieldErrors<CreateOrder>;
  setValue: UseFormSetValue<CreateOrder>;
  deliveryMethod: "self_pickup" | "nova_post";
}

const shops: Shop[] = [
  { city: "Київ", name: "Магазин Київ 1" },
  { city: "Київ", name: "Магазин Київ 2" },
  { city: "Харків", name: "Магазин Харків 1" },
  { city: "Харків", name: "Магазин Харків 2" },
];

const PostForm: React.FC<PostFormProps> = ({ control, errors, setValue, deliveryMethod }) => {
  const [cities, setCities] = useState<NovaPostCity[]>([]);
  const [deliveryDepartment, setDeliveryDepartment] = useState<
    NovaPostDepartment[]
  >([]);
  const [fetchError, setFetchError] = useState<string>("");
  const [chooseCity, setChooseCity] = useState<string | null>("");
  const [searchDep, setSearchDep] = useState<string | null>("");

  const fetchCities = async (city: string) => {
    if (city.length < 3) {
      setChooseCity("");
      return;
    }
    const apiKey = API_NOVA_POST;
    const url = API_NOVA_POST_URL;
    const data = {
      apiKey: apiKey,
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {
        FindByString: city,
      },
    };

    try {
      const response = await axios.post(url, data);
      const cities = await response.data.data;
      setCities(cities);
      setFetchError("");
    } catch (error) {
      console.error("Error:", error);
      setFetchError("Помилка завантаження даних");
    }
  };

  const fetchDepartments = async (city: string) => {
    const apiKey = API_NOVA_POST;
    const url = API_NOVA_POST_URL;
    const data = {
      apiKey: apiKey,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: city,
        Page: "1",
      },
    };

    try {
      const response = await axios.post(url, data);
      const departments = await response.data.data;
      setDeliveryDepartment(departments);
      setFetchError("");
    } catch (error) {
      console.error("Error:", error);
      setFetchError("Помилка завантаження даних");
    }
  };

  const debounceFetchCities = _.debounce((city: string) => {
    fetchCities(city);
  }, 500);

  useEffect(() => {
    if (!chooseCity) {
      setDeliveryDepartment([]);
      setValue("deliveryDepartment", "");
      return;
    }
    fetchDepartments(chooseCity);
  }, [chooseCity, setValue]);

  const filteredNovaPostsDepartments = useMemo(() => {
    if (!searchDep?.trim()) return deliveryDepartment || [];
    return deliveryDepartment.filter((dep) =>
      dep.Description.toLowerCase().includes(searchDep.toLowerCase())
    );
  }, [searchDep, deliveryDepartment]);

  const filteredShops = useMemo(() => {
    if (!chooseCity) return [];
    return shops
      .filter((shop) => shop.city === chooseCity)
      .map((shop) => shop.name);
  }, [chooseCity]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
      }}
    >
      <FormTitle>3. Спосіб доставки</FormTitle>
      <Box pt={"1rem"}>
        <Controller
          name="deliveryCity"
          control={control}
          rules={{
            required: "Вибір міста є обов'язковим",
          }}
          render={({ field }) => (
            <Autocomplete
              {...field}
              freeSolo
              clearOnBlur
              value={field.value}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : String(option)
              }
              onInputChange={(_, newValue) => {
                if (!newValue.trim()) {
                  setCities([]);
                } else {
                  debounceFetchCities(newValue);
                }
              }}
              onChange={(_, newValue) => {
                field.onChange(newValue);
                setChooseCity(newValue);
              }}
              options={deliveryMethod === "nova_post" ? cities?.map((city) => city.Description) : ['Київ', 'Харків']}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Вибір міста"
                  error={!!errors.deliveryCity}
                  helperText={errors.deliveryCity?.message}
                />
              )}
            />
          )}
        />
        {fetchError && <p className={styles.error}>*{fetchError}</p>}
        <Controller
          name="deliveryDepartment"
          control={control}
          rules={{
            required: "Вибір відділення є обов'язковим",
          }}
          render={({ field }) => (
            <Autocomplete
              {...field}
              sx={{ marginTop: 3 }}
              freeSolo
              clearOnBlur
              value={field.value}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : String(option)
              }
              onInputChange={(_, newValue) => {
                setSearchDep(newValue);
              }}
              onChange={(_, newValue) => {
                field.onChange(newValue);
              }}
              options={deliveryMethod === "nova_post" ? filteredNovaPostsDepartments?.map(
                (dep) => dep.Description
              ) : filteredShops}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={deliveryMethod === "nova_post" ? "Вибір відділення" : "Вибір магазину"}
                  error={!!errors.deliveryDepartment}
                  helperText={errors.deliveryDepartment?.message}
                />
              )}
            />
          )}
        />
        {fetchError && <p className={styles.error}>*{fetchError}</p>}
      </Box>
    </Box>
  );
};

export default PostForm;
