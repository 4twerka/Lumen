import { FiltersState, Product } from "../types";
import { getPriceRange } from "./filter";

export const getFilteredProducts = (products: Product[], filtersState: FiltersState) : Product[] => {
    const priceRange = getPriceRange(filtersState.price);
    const filteredProducts = products.filter((product) => {
        const filteredPriceProducts =
          filtersState.price.length === 0 ||
          priceRange.some(
            (range) => product.price >= range.min && product.price <= range.max
          );
        const filterAromaProducts =
          filtersState.aroma.length === 0 ||
          filtersState.aroma.some((aromaItem) =>
            product.describe?.aroma?.includes(aromaItem.toLowerCase())
          );
        const filterTypeProducts =
          filtersState.types.length === 0 ||
          filtersState.types.some((typeItem) =>
            product.describe?.type?.includes(typeItem.toLowerCase())
          );
        return filteredPriceProducts && filterAromaProducts && filterTypeProducts;
      });
    return filteredProducts;
}