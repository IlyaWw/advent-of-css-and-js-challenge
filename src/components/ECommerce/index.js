import React from 'react';

const ECommerce = () => {
  // - View the plates on the left side of the screen and add them to your cart on the right side.
  // - When there are no plates within your cart, you should see a message that says, "Your cart is empty."
  // - When a plate is added to your cart, the Subtotal and Totals will automatically update.
  // - When products are in your cart, you should be able to increase and decrease the quantity.
  // - A user should not be able to mark the quantity as a negative number.
  // - If the quantity goes down to 0, the user will have the option to delete or remove the product for their cart entirely.
  // - Tax is based on the state of Tennessee sales tax: `0.0975`
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      ECommerce in progress
    </div>
  );
};

export default ECommerce;
