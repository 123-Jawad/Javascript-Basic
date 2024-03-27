// 11. Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
      this.accountNumber = accountNumber;
      this.accountHolderName = accountHolderName;
      this.balance = balance;
    }
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount}. Current balance: $${this.balance}`);
    }
    withdraw(amount) {
      if (amount > this.balance) {
        console.log('Insufficient funds. Withdrawal denied.');
      } else {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. Current balance: $${this.balance}`);
      }
    }
    transfer(amount, targetAccount) {
      if (amount > this.balance) {
        console.log('Insufficient funds for transfer. Transfer denied.');
      } else {
        this.balance -= amount;
        targetAccount.balance += amount;
        console.log(`Transferred $${amount} to Account ${targetAccount.accountNumber}.`);
      }
    }
  }
  
  // Create instances of BankAccount
  const account1 = new BankAccount(123456789, 'Ali', 1000);
  const account2 = new BankAccount(987654321, 'Ahmad', 500);
  
  account1.deposit(500);
  account1.withdraw(200);
  account1.transfer(300, account2);
  account2.deposit(100);
  