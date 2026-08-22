/**
 * Problem 1 — Cinema Ticket Counter

 * Scenario
A cinema is building a ticketing system. The ticket price depends on the customer's age because children and senior citizens receive special pricing. You are responsible for creating the function that determines how much a customer should pay for a single ticket.

Task
Create a function named getTicketPrice. The function should receive the customer's age and return the appropriate ticket price.

 */

function getTicketPrice(age: number): number {

    if(age < 5) {
        return 0;
    }

    else if (age >= 5 && age <= 12) {
        return 100;
    }
    else if (age >= 13 && age <= 59) {
        return 200;
    }

    else {

        return 120;

    }

}

console.log(getTicketPrice(3));
console.log(getTicketPrice(10));
console.log(getTicketPrice(25));
console.log(getTicketPrice(65));
