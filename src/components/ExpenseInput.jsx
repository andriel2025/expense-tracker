import React, { useState } from "react";

function ExpenseInput() {
    const [expenses, setExpenses] = useState([]);
    const [type, setType] = useState("Expense");
    const [category, setCategory] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handleAddExpense = () => {
        if (!category || !amount || !date) {
            alert("Please fill in category, amount, and date.");
            return;
        }

        const newExpense = {
            id: Date.now(),
            type,
            category,
            subtitle,
            amount: parseFloat(amount),
            date,
        };

        setExpenses([...expenses, newExpense]);

        setCategory("");
        setSubtitle("");
        setAmount("");
        setDate("");
    };

    return (
        <div
            style={{
                maxWidth: "700px",
                margin: "2rem auto",
                padding: "1.5rem",
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: "#333",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.2rem 2rem",
                    alignItems: "center",
                    marginBottom: "1rem",
                }}
            >
                <label style={{ fontWeight: "600" }}>Type:</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    style={{
                        padding: "0.5rem",
                        borderRadius: "5px",
                        border: "1px solid #cddcdc",
                        backgroundColor: "#d9f0f0", // pastel teal
                    }}
                >
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>

                <label style={{ fontWeight: "600" }}>Expense Category:</label>
                <input
                    type="text"
                    placeholder="e.g., Food"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                        padding: "0.5rem",
                        borderRadius: "5px",
                        border: "1px solid #cddcdc",
                        backgroundColor: "#fef6e4", // pastel yellow
                    }}
                />

                <label style={{ fontWeight: "600" }}>Subtitle (optional):</label>
                <input
                    type="text"
                    placeholder="Add subtitle"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    style={{
                        padding: "0.5rem",
                        borderRadius: "5px",
                        border: "1px solid #cddcdc",
                        backgroundColor: "#fbe4f9", // pastel pink
                    }}
                />

                <label style={{ fontWeight: "600" }}>Amount:</label>
                <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{
                        padding: "0.5rem",
                        borderRadius: "5px",
                        border: "1px solid #cddcdc",
                        backgroundColor: "#e4f9f5", // pastel mint
                    }}
                />

                <label style={{ fontWeight: "600" }}>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                        padding: "0.5rem",
                        borderRadius: "5px",
                        border: "1px solid #cddcdc",
                        backgroundColor: "#f0f4ff", // pastel blue
                    }}
                />
            </div>

            <button
                onClick={handleAddExpense}
                style={{
                    padding: "0.7rem 1.5rem",
                    backgroundColor: "#a0d8ef", // pastel blue button
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "600",
                    color: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#89c7e9")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#a0d8ef")}
            >
                Add Expense
            </button>

            <hr style={{ margin: "2rem 0" }} />

            {expenses.length === 0 ? (
                <p style={{ fontStyle: "italic", color: "#999" }}>No expenses added yet.</p>
            ) : (
                <div>
                    <h3 style={{ marginBottom: "1rem", color: "#666" }}>Expense List</h3>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {expenses.map((exp) => (
                            <li
                                key={exp.id}
                                style={{
                                    backgroundColor: "#f3f3f3",
                                    marginBottom: "0.8rem",
                                    padding: "0.8rem 1rem",
                                    borderRadius: "6px",
                                    boxShadow: "inset 0 0 5px rgba(0,0,0,0.05)",
                                }}
                            >
                                <strong style={{ color: exp.type === "Income" ? "#2e7d32" : "#c62828" }}>
                                    {exp.type}
                                </strong>{" "}
                                - {exp.category} {exp.subtitle && `(${exp.subtitle})`} - ₹{exp.amount} on{" "}
                                {exp.date}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ExpenseInput;
