export default function ExpenseList({ expenses }) {
    return (
        <ul>
            {expenses.map((e) => (
                <li key={e.id}>
                    {e.title}: ₹{e.amount}
                </li>
            ))}
        </ul>
    );
}

