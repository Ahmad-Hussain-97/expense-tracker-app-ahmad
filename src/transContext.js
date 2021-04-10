import React, { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";

const initialTransactions = [
  { amount: 500, desc: "Cash" },
  { amount: -50, desc: "Drinks" },
  { amount: 100, desc: "Deposit" },
];

export const TransactionContext = createContext(initialTransactions);
export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD_Transaction",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  }
  return (
    <TransactionContext.Provider
      value={{
        transactions: state,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
