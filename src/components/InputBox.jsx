import React, { useId } from "react";

function InputBox({
  label,
  amount,
  currencyOptions = [],
  onCurrencyChange,
  onAmountChange,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`border border-2 border-gray-700 p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black mb-2 inline-block"
        >
          {label}
        </label>
        <input
          className="w-full bg-transparent py-1.5 text-pink font-bold px-2"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          id={amountInputId}
          autoFocus
          />  
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 border border-2 border-gray-700  cursor-pointer outline-none"
          disabled={currencyDisable}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency} className="backdrop-blur-sm bg-transparent">
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
