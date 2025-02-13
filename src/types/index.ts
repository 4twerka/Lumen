interface ProductDescribe {
    aroma: string,
    burning_time: string,
    short_describe: string,
    type: string,
    size: string,
    color: string,
    assignment: string,
    material: string,
    form: string,
    features: string,
}

export interface Product {
    image: string[];
    _id: string;
    comments: string[];
    collections: string;
    describe: ProductDescribe;
    title: string;
    price: number;
    stock: number;
    rate_avg_product: number;
    __v: number;
}

export interface FiltersState {
    types: string[];
    price: string[];
    size: string[];
    aroma: string[];
    assignment: string[];
    color: string[];
    material: string[];
    form: string[];
    features: string[];
    giftWrapping: boolean,
  }