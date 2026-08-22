
/**
 * Problem 2 — Store Inventory Status

 * Function name must be: getStockStatus
Scenario
An online store wants to show customers whether a product is available before they place an order. The inventory system stores the number of currently available units. Your job is to convert that number into a meaningful status message.
Task
Create a function named getStockStatus. The function receives the current stock quantity and returns a status string.

 */

function getStockStatus(stock: number): string{
    if(stock === 0) {
        return "Out of Stock"
    }

    else if (stock >= 1 && stock <= 5 ) {
           return "Almost Sold Out"
    }
    else if (stock >= 6 && stock <= 20 ) {
           return "Available"
    }
    else  {
           return "In Stock"
    }
 
 
}

console.log(getStockStatus(0));
