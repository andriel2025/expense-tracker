import { useState } from "react";

export default function AddExpense({ onAdd }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount) return;
        onAdd({ id: Date.now(), title, amount: parseFloat(amount) });
        setTitle("");
        setAmount("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Expense title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}
