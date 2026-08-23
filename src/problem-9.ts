
type Transaction = {
    amount: number;
    type: "withdrawal" | "deposit";
}

function processTransaction(balance: number, transaction: Transaction): number | string {
 
    if (transaction.type === "withdrawal") {
        if (transaction.amount > balance) {
            return "Insufficient funds";
        }
        return balance - transaction.amount;
    } else {
        return balance + transaction.amount;
    }

}

console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));

