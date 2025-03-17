/*
OOPS Task 4

Encapsulation, Polymorphism, Abstraction, and Getters/Setters

Task 1: Encapsulation Using Getters and Setters
Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.


// Task 1
class BankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }
}
*/




class BankAccount {
  #balance;      // Private field
  constructor(balance = 0) {
    if (balance<0){
      throw new Error("Balance cannot be negative")
    }
    this.#balance = balance;
  }

   // Getter for balance
   get balance() {
    return this.#balance;
   }
     // Setter for balance (prevents negative values)
  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this.#balance = amount;
  }

 // Deposit method
 deposit(amount) {
  if (amount <= 0) {
    throw new Error("Deposit amount must be positive");
  }
  this.#balance += amount;
  console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
}
 

// Withdraw method
withdraw(amount) {
  if (amount <= 0) {
    throw new Error("Withdrawal amount must be positive");
  }
  if (amount > this.#balance) {
    throw new Error("Insufficient balance");
  }
  this.#balance -= amount;
  console.log(`Withdrawn: $${amount}. Remaining Balance: $${this.#balance}`);
}
}

const myacoount=new BankAccount(2000);
console.log(myacoount.balance);

myacoount.deposit(500);
myacoount.withdraw(300);


myacoount.balance=5000;    //setter
console.log(myacoount.balance)




