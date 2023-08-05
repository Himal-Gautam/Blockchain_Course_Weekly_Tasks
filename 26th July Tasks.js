// Question 1, Write a Javascript code to make online booking of theatre tickets and calculate the total price based on the below conditions:

// If seats to be booked are not more than 2, the cost per ticket remains $9.
// If seats are 5 or more, booking is not allowed
// If seats to be booked are more than 2 but less than 5, based on the number of seats booked, do the following:
// Calculate total cost by applying discounts of 5, 7, 9, 11 percent, and so on for customers 1, 2, 3, and 4.
// Try the code with different values for the number of seats.

function calculateTicketPrice(numSeats) {
    const costPerTicket = 9;
    let totalPrice = 0;
  
    if (numSeats <= 2) {
      totalPrice = costPerTicket * numSeats;
    } else if (numSeats >= 5) {
      console.log("Booking not allowed for 5 or more seats.");
      return;
    } else {
      const discountPercentage = 5 + (numSeats - 3) * 2; // 5% discount for customer 1, 7% discount for customer 2, and so on
      const discountFactor = 1 - discountPercentage / 100;
      totalPrice = costPerTicket * numSeats * discountFactor;
    }
  
    console.log(`Total price for ${numSeats} seats: $${totalPrice.toFixed(2)}`);
  }
  
  // Example usage:
  calculateTicketPrice(1); // Output: Total price for 1 seat: $9.00
  calculateTicketPrice(2); // Output: Total price for 2 seats: $18.00
  calculateTicketPrice(3); // Output: Total price for 3 seats: $25.65
  calculateTicketPrice(4); // Output: Total price for 4 seats: $33.12
  calculateTicketPrice(5); // Output: Booking not allowed for 5 or more seats.
  calculateTicketPrice(8); // Output: Booking not allowed for 5 or more seats.

  
// Question 2, Create an Employee class extending from a base class Person.

// Approach to the solution:
// Create a class Person with name and age as attributes
// Add a constructor to initialize the values
// Create a class Employee extending Person with additional attributes role and contract
// The constructor of the Employee to accept the name, age, role and contact where name and age are initialized through a call to call to super to super to invoke the base class constructor
// Add a method getDetails() to display all the details of the Employee.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, role, contract) {
    super(name, age); // Invoking the base class constructor using super
    this.role = role;
    this.contract = contract;
  }

  getDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Role: ${this.role}`);
    console.log(`Contract: ${this.contract}`);
  }
}

// Example usage:
const employee1 = new Employee(
  "John Doe",
  30,
  "Software Engineer",
  "Full-time"
);
employee1.getDetails();
