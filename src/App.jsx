import { useState } from "react";
import { InputBox } from "./components/";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [convertedCurrency, setConvertedCurrency] = useState(0);
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedCurrency(amount);
    setAmount(convertedCurrency);
  };

  const convert = () => {
    setConvertedCurrency(amount * currencyInfo[to]);
    // console.log(currencyInfo);
    // console.log(to)
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/963278/pexels-photo-963278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full ">
        <div className="w-full max-w-md mx-auto border border-2 border-gray-600 rounded-lg p-5 backdrop-blur-xl bg-white/30">
          <p className="text-4xl py-4 justify-center text-center">
            Currency Converter
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-700 rounded-md bg-gray-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedCurrency}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full border-2 border-gray-700 bg-gray-600 px-4 py-3 rounded-lg"
            >
              Convert <b>{from.toUpperCase()}</b> TO<b> {to.toUpperCase()}</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
