import { Product } from "../types";

function getPaginatedProducts(arr: Product[], pagination: number):Product[][] {
    const result:Product[][] = [];
    for (let i = 0; i < arr.length; i=i + pagination) {
        const part = arr.slice(i, i+pagination);
        result.push(part);        
    }
    return result;
  }

export {getPaginatedProducts};