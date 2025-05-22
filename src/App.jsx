import { useState } from "react";
import ExpenseInput from "./components/ExpenseInput";
import "./App.css"; // optional CSS import

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseInput onAddExpense={addExpenseHandler} />

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul className="expense-list">
          {expenses.map((exp) => (
            <li key={exp.id} className="expense-item">
              <span>
                {exp.title} - ₹{exp.amount} on {exp.date.toDateString()} ({exp.type})
              </span>
              <button
                onClick={() => deleteExpenseHandler(exp.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
