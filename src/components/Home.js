import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  // state declaration
  const api = "https://api.exchangeratesapi.io";
  const [currencyList, setCurrencyList] = useState([]);
  const [visibleCurrency, setVisibleCurrency] = useState([]);
  const [amountInput, setAmountInput] = useState(10);
  const [newVisibleCurrency, setNewVisibleCurrency] = useState("");
  //   end of state declaration

  //   declare function
  const getAllCurrencyData = async () => {
    const res = await axios.get(`${api}/latest?base=USD`);
    setCurrencyList(Object.keys(res.data.rates));
  };
  // end of declare function

  useEffect(() => {
    //   call all the initial function here
    getAllCurrencyData();
  }, []);

  return <React.Fragment>{}</React.Fragment>;
};

export default Home;
