import { FiltersState, Product } from "../types";
import { getPriceRange, getSizeRange } from "./filter";

export const getFilteredProducts = (
  products: Product[],
  filtersState: FiltersState
): Product[] => {
  const priceRange = getPriceRange(filtersState.price);
  const sizeRange = getSizeRange(filtersState.size);
  
  const filteredProducts = products.filter((product) => {
    const filteredPriceProducts =
      filtersState.price.length === 0 ||
      priceRange.some(
        (range) => product.price >= range.min && product.price <= range.max
      );
    const filteredSizeProducts =
      filtersState.size.length === 0 ||
      sizeRange.some(
        (range) => product.size >= range.min && product.size <= range.max
      );
    const filterAromaProducts =
      filtersState.aroma.length === 0 ||
      filtersState.aroma.some((aromaItem) =>
        product.aroma?.includes(aromaItem)
      );
    const filterTypeProducts =
      filtersState.types.length === 0 ||
      filtersState.types.some((typeItem) =>
        product.type_candle?.includes(typeItem)
      );
    const filterAssignmentProducts =
      filtersState.assignment.length === 0 ||
      filtersState.assignment.some((typeItem) =>
        product.appointment?.includes(typeItem)
      );
    const filterColorProducts =
      filtersState.color.length === 0 ||
      filtersState.color.some((typeItem) => product.color?.includes(typeItem));
    const filterMaterialProducts =
      filtersState.material.length === 0 ||
      filtersState.material.some((typeItem) => product.material?.includes(typeItem));
    const filterFormProducts =
      filtersState.form.length === 0 ||
      filtersState.form.some((typeItem) => product.shape?.includes(typeItem));
    const filterFeaturesProducts =
      filtersState.features.length === 0 ||
      filtersState.features.some((typeItem) => product.features?.includes(typeItem));

    return (
      filteredPriceProducts &&
      filteredSizeProducts &&
      filterAromaProducts &&
      filterTypeProducts &&
      filterAssignmentProducts &&
      filterColorProducts &&
      filterMaterialProducts &&
      filterFormProducts &&
      filterFeaturesProducts
    );
  });
  return filteredProducts;
};
