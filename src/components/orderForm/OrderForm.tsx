import React from "react";
import styles from "./OrderForm.module.css";

function OrderForm() {
  return (
    <div className={styles.container}>
      {/* Основна форма */}
      <div className={styles.formSection}>
        {/* Контактна інформація */}
        <div className={styles.card}>
          <h2 className={styles.title}>1. Контактна інформація</h2>
          <div className={styles.emailBlock}>
            <span className={styles.email}>john@email.com</span>
            <button className={styles.logout}>Log Out</button>
          </div>
        </div>

        {/* Особисті деталі */}
        <div className={styles.card}>
          <h2 className={styles.title}>2. Особисті деталі</h2>
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
            <input type="checkbox" /> Зберегти дані для подальших замовлень
          </label>
        </div>

        {/* Метод доставки */}
        <div className={styles.card}>
          <h2 className={styles.title}>3. Метод доставки</h2>
          <div className={styles.radioGroup}>
            <label className={styles.radio}>
              <input type="radio" name="delivery" /> Delivery method <span>Price</span>
            </label>
            <label className={styles.radio}>
              <input type="radio" name="delivery" /> Delivery method <span>Price</span>
            </label>
            <label className={`${styles.radio} ${styles.active}`}>
              <input type="radio" name="delivery" checked /> Delivery method <span>Price</span>
            </label>
          </div>
        </div>

        {/* Метод оплати */}
        <div className={styles.card}>
          <h2 className={styles.title}>4. Метод оплати</h2>
          <div className={styles.radioGroup}>
            <label className={styles.radio}>
              <input type="radio" name="payment" /> Готівка при доставці
            </label>
            <label className={`${styles.radio} ${styles.active}`}>
              <input type="radio" name="payment" checked /> Pay with Visa/Mastercard
            </label>
          </div>
          <label className={styles.checkbox}>
            <input type="checkbox" /> Не телефонуйте мені
          </label>
          <textarea placeholder="Додати коментар до замовлення" className={styles.textarea}></textarea>
        </div>

        <button className={styles.button}>Перейти до оплати</button>
      </div>

      {/* Кошик */}
      <div className={styles.cartSection}>
        <h2 className={styles.cartTitle}>Ваше замовлення <span className={styles.cartCount}>3</span></h2>
        <div className={styles.cartItem}>
          <img src="https://via.placeholder.com/50" alt="item" className={styles.cartImage} />
          <div className={styles.cartDetails}>
            <p>Made By Zen Chi Ceramic Aroma Diffuser</p>
            <span>1600 UAH</span>
          </div>
          <button className={styles.cartRemove}>✖</button>
        </div>
        <div className={styles.cartSummary}>
          <p>Сума: <span>12350 UAH</span></p>
        </div>
      </div>
    </div>
  );
}

export { OrderForm };