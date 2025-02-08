import React, { useState } from "react";
import styles from "./OrderForm.module.css";
import { Typography } from "@mui/material";
import Image from "../../assets/test.png";
import EmailIcon from "../../assets/email-icon.png";

function OrderForm() {
  const [isClicked, setIsClicked] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <div className={styles.card}>
          <h2 className={styles.title}>1. Контактна інформація</h2>
          <div className={styles.emailBlock}>
            <img src={EmailIcon} alt="Email" className={styles.emailIcon} />
            <span className={styles.email}>john@email.com</span>
            <button className={styles.logout}>Log Out</button>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.title}>2. Особисті деталі</h2>
          <span className={styles.subtitleCity}>Обери своє місто</span>
          <select className={styles.input}>
            <option>Обрати</option>
          </select>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Ім'я *" className={styles.input} />
            <input type="text" placeholder="Прізвище *" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Номер телефону *" className={styles.input} />
            <input type="email" placeholder="E-mail *" className={styles.input} />
          </div>
          <label className={styles.checkbox}>
            <input className={styles.inputRadio} type="checkbox" /> Зберегти дані для подальших замовлень
          </label>
        </div>

        <div className={styles.card}>
          <h2 className={styles.title}>3. Метод доставки</h2>
          <span className={styles.subtitleCity}>Обери метод доставки</span>
          <div className={styles.radioGroup}>
            {[1, 2, 3].map((_, index) => (
              <label key={index} className={`${styles.radio} ${isClicked === index ? styles.active : ""}`}>
                <div className={styles.radioTop}>
                  <span>
                    <input
                      checked={isClicked === index}
                      onChange={() => setIsClicked(index)}
                      className={styles.inputRadio}
                      type="radio"
                      name="delivery"
                    />
                    Delivery method
                  </span>
                  <Typography variant="body2" className={styles.priceText}>Price</Typography>
                </div>
                <div className={styles.radioBottom}>Delivery period</div>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.title}>4. Метод оплати</h2>
          <div className={styles.radioGroup}>
            <label className={`${styles.radio} ${paymentMethod === "cash" ? styles.active : ""}`}>
              <div className={styles.radioTop}>
                <span>
                  <input
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                    className={styles.inputRadio}
                    type="radio"
                    name="payment"
                  />
                  Готівка при доставці
                </span>
              </div>
              <div className={styles.radioBottom}>
                Зверніть увагу, що Нова пошта стягує комісію 20 грн + 2% від загальної суми замовлення
              </div>
            </label>

            <label className={`${styles.radio} ${paymentMethod === "card" ? styles.active : ""}`}>
              <div className={styles.radioTop}>
                <span>
                  <input
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className={styles.inputRadio}
                    type="radio"
                    name="payment"
                  />
                  Pay with Visa/Mastercard
                </span>
              </div>
            </label>
          </div>
          <label className={styles.checkbox}>
            <input className={styles.inputRadio} type="checkbox" /> Не телефонуйте мені
          </label>
          <textarea placeholder="Додати коментар до замовлення" className={styles.textarea}></textarea>
          <p>0/500 символів</p>
        </div>

        <button className={styles.button}>Перейти до оплати</button>
      </div>

      <div className={styles.cartSection}>
        <h2 className={styles.cartTitle}>
          Ваше замовлення <span className={styles.cartCount}>8</span>
        </h2>
        {[1, 2, 3].map((_, index) => (
          <div key={index}>
            <div className={styles.cartItem}>
              <img src={Image} alt="order" className={styles.cartImage} />
              <div className={styles.cartDetails}>
                <div className={styles.cartHeader}>
                  <p className={styles.cartProductName}>Made By Zen Chi Ceramic Aroma Diffuser</p>
                  <button className={styles.cartRemove}>✖</button>
                </div>
                <div className={styles.cartInfo}>
                  <span className={styles.itemId}>75684143</span>
                  <span className={styles.price}>1600 UAH</span>
                  <div className={styles.quantityControl}>
                    <button className={`${styles.quantityBtn} ${styles.quantityBtnMinus}`}>-</button>
                    <span>1</span>
                    <button className={styles.quantityBtn}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
        <div className={styles.cartSummary}>
          <div className={styles.sumControl}>
            <p>Сума:</p>
            <span>12350 UAH</span>
          </div>
          <span>Маю промокод</span>
          <div className={styles.promoBlock}>
            <input type="text" placeholder="номер" className={styles.promoInput} />
            <button className={styles.promoButton}>Відправити</button>
          </div>
          <hr />
          <div className={styles.sumControl}>
            <p className={styles.totalSum}>Загальна сума</p>
            <span className={styles.typoH3}>12350 UAH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { OrderForm };