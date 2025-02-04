import React from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { OrderForm } from "../components/orderForm/OrderForm";

function OrderPage() {
    return (
        <div>
            <Header />
                <OrderForm />
            <Footer />
        </div>
    )
}

export { OrderPage }