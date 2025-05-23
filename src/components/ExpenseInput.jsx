import React, { useState } from "react";

function ExpenseInput() {
    const [expenses, setExpenses] = useState([]);
    const [type, setType] = useState("Expense");
    const [category, setCategory] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [editId, setEditId] = useState(null);

    const handleAddExpense = () => {
        if (!category || !amount || !date) {
            alert("Please fill in Category, Amount, and Date.");
            return;
        }
        if (editId !== null) {
            setExpenses((prev) =>
                prev.map((exp) =>
                    exp.id === editId
                        ? { id: exp.id, type, category, subtitle, amount: parseFloat(amount), date }
                        : exp
                )
            );
            setEditId(null);
        } else {
            setExpenses([
                ...expenses,
                { id: Date.now(), type, category, subtitle, amount: parseFloat(amount), date },
            ]);
        }
        setType("Expense");
        setCategory("");
        setSubtitle("");
        setAmount("");
        setDate("");
    };

    const handleEdit = (id) => {
        const exp = expenses.find((e) => e.id === id);
        if (!exp) return;
        setType(exp.type);
        setCategory(exp.category);
        setSubtitle(exp.subtitle);
        setAmount(exp.amount.toString());
        setDate(exp.date);
        setEditId(id);
    };

    const handleDelete = (id) => {
        setExpenses(expenses.filter((exp) => exp.id !== id));
        if (editId === id) {
            setEditId(null);
            setType("Expense");
            setCategory("");
            setSubtitle("");
            setAmount("");
            setDate("");
        }
    };

    return (
        <div className="app-container">
            <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>


            <div className="expense-input-grid">
                <label>Type:</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>

                <label>Category:</label>
                <input
                    type="text"
                    placeholder="e.g., Food"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <label>Subtitle (optional):</label>
                <input
                    type="text"
                    placeholder="Add subtitle"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                />

                <label>Amount:</label>
                <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <button onClick={handleAddExpense}>
                {editId !== null ? "Update Expense" : "Add Expense"}
            </button>

            {expenses.length === 0 ? (
                <p>No expenses added yet.</p>
            ) : (
                <ul>
                    {expenses.map((exp) => (
                        <li key={exp.id} className="expense-item">
                            <div className="expense-info">
                                <span
                                    className={
                                        exp.type === "Income"
                                            ? "expense-type-income"
                                            : "expense-type-expense"
                                    }
                                >
                                    {exp.type}
                                </span>{" "}
                                — {exp.category} {exp.subtitle && `(${exp.subtitle})`} — ₹
                                {exp.amount} on {exp.date}
                            </div>
                            <div className="expense-actions">
                                <button className="btn edit-btn" onClick={() => handleEdit(exp.id)}>Edit</button>
                                <button className="btn delete-btn" onClick={() => handleDelete(exp.id)}>Delete</button>
                            </div>
                        </li>

                    ))}
                </ul>

            )}
        </div>
    );
}

export default ExpenseInput;
