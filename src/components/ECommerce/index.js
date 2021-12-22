import React, { useState } from 'react';

import bgLeft from './images/bg__left.svg';
import bgTopRight from './images/bg__top-right.svg';
import bgBtmRight from './images/bg__btm-right.svg';
import { ReactComponent as Check } from './images/check.svg';
import { ReactComponent as Chevron } from './images/chevron.svg';
import menu from './menu';
import styles from './index.module.css';

const generateRandomColor = () =>
  `hsla(${Math.floor(Math.random() * 360)}, 80%, 70%, 0.2)`;

const menuObj = menu.reduce((menuObj, item) => {
  menuObj[item.name] = item;
  menuObj[item.name].color = generateRandomColor();
  return menuObj;
}, {});

const TAX_RATE = 0.0975;

const ECommerce = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const formatPrice = (price) =>
    price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

  const addItem = (e) => {
    const { name } = e.target;

    if (!Object.keys(selectedItems).includes(name))
      setSelectedItems({
        ...selectedItems,
        [name]: 1,
      });
  };

  const decreaseQuantity = (e) => {
    const { name } = e.currentTarget;
    const quantity = selectedItems[name];

    if (quantity > 1)
      setSelectedItems({ ...selectedItems, [name]: quantity - 1 });
    else {
      const remove = window.confirm(
        `Do you want to remove ${name} from your cart?`
      );

      if (remove) {
        setSelectedItems(
          Object.keys(selectedItems).reduce((filtered, item) => {
            if (item !== name) filtered[item] = selectedItems[item];
            return filtered;
          }, {})
        );
      }
    }
  };

  const increaseQuantity = (e) => {
    const { name } = e.currentTarget;

    setSelectedItems({ ...selectedItems, [name]: selectedItems[name] + 1 });
  };

  const horisontalLine = (isLast) => (
    <div
      className={isLast ? styles.horisontalLineLast : styles.horisontalLine}
    />
  );

  const selectedItemsNames = Object.keys(selectedItems);
  const subtotal = selectedItemsNames.reduce((sum, item) => {
    sum += menuObj[item].price * selectedItems[item];
    return sum;
  }, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <main className={styles.root}>
      <img src={bgLeft} alt="background" className={styles.bgLeft} />
      <img src={bgTopRight} alt="background" className={styles.bgTopRight} />
      <img src={bgBtmRight} alt="background" className={styles.bgBtmRight} />
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>To go menu</div>
          <div className={styles.cardBodyWrapper}>
            <div className={styles.cardBody}>
              {menu.map((menuItem) => (
                <div
                  className={styles.menuItem}
                  key={menuItem.name}
                  style={{ backgroundColor: menuObj[menuItem.name].color }}
                >
                  <img src={menuItem.image} alt={menuItem.name} />
                  <div className={styles.menuItemDescription}>
                    <div className={styles.menuItemName}>{menuItem.name}</div>
                    <div className={styles.menuItemPrice}>
                      {formatPrice(menuItem.price)}
                    </div>
                    {Object.keys(selectedItems).includes(menuItem.name) ? (
                      <button className={styles.menuItemButtonSelected}>
                        <Check />
                        In cart
                      </button>
                    ) : (
                      <button
                        className={styles.menuItemButton}
                        onClick={addItem}
                        name={menuItem.name}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>Your cart</div>
          <div className={styles.cardBodyWrapper}>
            <div className={styles.cardBody}>
              {selectedItemsNames.length === 0 ? (
                <>Your cart is empty</>
              ) : (
                <>
                  {selectedItemsNames.map((name, idx) => {
                    const quantity = selectedItems[name];
                    const price = menuObj[name].price;

                    return (
                      <div key={name}>
                        <div key={name} className={styles.cartItem}>
                          <img src={menuObj[name].image} alt={name} />
                          <div className={styles.cartItemQuantityImage}>
                            {quantity}
                          </div>
                          <div className={styles.cartItemDescription}>
                            <div className={styles.cartItemName}>{name}</div>
                            <div className={styles.cartItemPrice}>
                              {formatPrice(price)}
                            </div>
                            <div className={styles.cartItemControl}>
                              <button
                                name={name}
                                onClick={decreaseQuantity}
                                className={styles.substractButton}
                              >
                                <Chevron />
                              </button>
                              <div className={styles.cartItemQuantity}>
                                {quantity}
                              </div>
                              <button
                                className={styles.addButton}
                                name={name}
                                onClick={increaseQuantity}
                              >
                                <Chevron />
                              </button>
                              <div className={styles.cartItemPriceSum}>
                                {formatPrice(quantity * price)}
                              </div>
                            </div>
                          </div>
                        </div>
                        {horisontalLine(idx === selectedItemsNames.length - 1)}
                      </div>
                    );
                  })}
                  <div className={styles.cartItemTotal}>
                    <div className={styles.cartItemTotalKey}>Subtotal:</div>
                    <div className={styles.cartItemTotalValue}>
                      {formatPrice(subtotal)}
                    </div>
                    <div className={styles.cartItemTotalKey}>Tax:</div>
                    <div className={styles.cartItemTotalValue}>
                      {formatPrice(tax)}
                    </div>
                    <div className={styles.cartItemTotalKey}>Total:</div>
                    <div className={styles.cartItemTotalValuePurple}>
                      {formatPrice(total)}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ECommerce;
