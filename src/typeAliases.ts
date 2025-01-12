// Define a type alias for a string
type Username = string;

// Use the alias in a function
export function greetUser(user: Username): string {
    return `Hello, ${user}!`;
}
