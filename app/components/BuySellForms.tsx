import React from 'react';

const OrderForm = () => {
  return (
    <div className="flex flex-row justify-center" style={{display:"inline"}}>
      <div className="flex gap-8" >
        {/* Form for buying */}
        <form noValidate autoComplete="off" id="autoFormBUY" className="flex flex-col items-center">
          <div className="mb-4">
            <label htmlFor="buy-price" className="mb-2">Price</label>
            <input id="buy-price" name="price" type="number" min="0.01" step="0.01" value="50902.07" className="input-style" />
          </div>
          <div className="mb-4">
            <label htmlFor="buy-quantity" className="mb-2">Amount</label>
            <input id="buy-quantity" name="quantity" type="number" min="0.00001000" step="0.00001000" className="input-style" />
          </div>
          <div className="mb-4">
            <label htmlFor="buy-total" className="mb-2">Total</label>
            <input id="buy-total" name="total" type="number" min="0.0000001" step="0.0000001" className="input-style" />
          </div>
          <button id="buyBtn" data-testid="button-spot-buy" className="btn-buy">Buy</button>
        </form>

        {/* Form for selling */}
        <form noValidate autoComplete="off" id="autoFormSELL" className="flex flex-col items-center">
          <div className="mb-4">
            <label htmlFor="sell-price" className="mb-2">Price</label>
            <input id="sell-price" name="price" type="number" min="0.01" step="0.01" value="50902.07" className="input-style" />
          </div>
          <div className="mb-4">
            <label htmlFor="sell-quantity" className="mb-2">Amount</label>
            <input id="sell-quantity" name="quantity" type="number" min="0.00001000" step="0.00001000" className="input-style" />
          </div>
          <div className="mb-4">
            <label htmlFor="sell-total" className="mb-2">Total</label>
            <input id="sell-total" name="total" type="number" min="0.0000001" step="0.0000001" className="input-style" />
          </div>
          <button id="sellBtn" data-testid="button-spot-sell" className="btn-sell">Sell</button>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
