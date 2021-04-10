import { useContext } from "react";
import { TransactionContext } from "./transContext";

function Child() {
  let transactions = useContext(TransactionContext);
  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker App</h1>
      <h3>
        Your balance <br /> $260.00
      </h3>
      <div className="expense-container">
        <h3>
          Income <br /> $500.00
        </h3>
        <h3>
          Expense <br /> $240.00
        </h3>
      </div>
      <h3>History</h3>
      <hr />
      <ul className="transaction-list">
        {transactions.map((transObj, indx) => {
          return (
            <li>
              <span>{transObj.desc}</span>
              <span>{transObj.amount}</span>
            </li>
          );
        })}
      </ul>

      <h3>Add new transaction</h3>
      <hr />
      <form className="transaction-form">
        <label>
          Enter Description <br />
          <input type="text" required />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input type="number" required />
        </label>
        <input type="submit" value="Add Transaction"></input>
      </form>
    </div>
  );
}

export default Child;
