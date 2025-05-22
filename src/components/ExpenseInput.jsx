import React, { useState } from "react";
import "./ExpenseInput.css";

const categories = ["Food", "Transport", "Shopping", "Bills", "Others"];

export default function ExpenseInput() {
    const [type, setType] = useState("Income");
    const [category, setCategory] = useState(categories[0]);
    const [subtitle, setSubtitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [entries, setEntries] = useState([]);

    function handleAddEntry(e) {
        e.preventDefault();
        if (!amount || !date) return alert("Please enter amount and date");

        const newEntry = {
            id: Date.now(),
            type,
            category,
            subtitle: subtitle.trim(),
            amount: parseFloat(amount),
            date,
        };

        setEntries([newEntry, ...entries]);
        setSubtitle("");
        setAmount("");
        setDate("");
    }

    function handleDelete(id) {
        setEntries(entries.filter((entry) => entry.id !== id));
    }

    return (
        <div className="expense-container">


            <form className="expense-form" onSubmit={handleAddEntry}>
                <div className="form-control">
                    <label>Type:</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                </div>

                <div className="form-control">
                    <label>Expense Category:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        {categories.map((cat, idx) => (
                            <option key={idx} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-control">
                    <label>Subtitle (optional):</label>
                    <input
                        type="text"
                        placeholder="Add subtitle"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label>Amount:</label>
                    <input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-control">
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        max={new Date().toISOString().split("T")[0]} // prevent future dates
                    />
                </div>

                <button className="add-btn" type="submit">
                    Add Expense
                </button>
            </form>

            <ul className="entry-list">
                {entries.length === 0 && <p>No expenses added yet.</p>}
                {entries.map((entry) => (
                    <li key={entry.id} className={`entry ${entry.type.toLowerCase()}`}>
                        <div className="entry-details">
                            <div className="entry-type-category">
                                {entry.type.toUpperCase()} - {entry.category}
                            </div>
                            <div className="entry-subtitle">
                                {entry.subtitle || "(No subtitle)"}
                            </div>
                            <div className="entry-amount-date">
                                Amount: ₹{entry.amount.toFixed(2)} | Date: {entry.date}
                            </div>
                        </div>
                        <button className="delete-btn" onClick={() => handleDelete(entry.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
