
/**
 * Function name must be: formatUserProfile
Scenario
A social media application stores basic information about its users. The application needs a function that converts a user's structured data into a human-readable profile summary. A user contains name, age, and city.
Task
First define an appropriate TypeScript type or interface for the user. Then create a function named formatUserProfile. The function should receive a user object and return a formatted sentence.

 */

  interface User {
        name: string
        age: number
        city: string
    }

function formatUserProfile(user: User): string {

  return `"${user.name} is ${user.age} years old and lives in ${user.city}."`
 
} 

console.log(formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka"
}
))

console.log(formatUserProfile({
    name: "Dalia",
    age: 20,
    city: "Sylhet"
}
))
