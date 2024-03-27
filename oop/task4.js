// 4. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.


class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} dollars. Current balance: ${this.balance} dollars`);
    }
    withdraw(amount) {
      if (amount > this.balance) {
        console.log('Insufficient funds. Withdrawal denied.');
      } else {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} dollars. Current balance: ${this.balance} dollars`);
      }
    }
}
  // Create instances of BankAccount
  const account1 = new BankAccount(123457849, 1000);
  const account2 = new BankAccount(987651249, 500);
  // Deposit money into accounts
  account1.deposit(500);
  account2.deposit(200);
  // Withdraw money from accounts
  account1.withdraw(300);
  account2.withdraw(700);
  