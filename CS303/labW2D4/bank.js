"use strict";
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
*/


const bank = {
    transactionDB: [],
    };
    bank.transactionDB = [
    { custID: 1, custTrans: [10, 50, -40] }, // balance = 20
    { custID: 2, custTrans: [10, 10, -10] }, // balance = 10
    { custID: 3, custTrans: [5, -5, 55] }, // balance = 55
    ];

    
    bank.checkId = function (id) {
    const foundCustmr = bank.transactionDB.find(customer => customer.custID === id);
    return foundCustmr;
    };
    bank.getBalance = function (id) {
    const customer = this.checkId(id);
    const balance = customer.custTrans.reduce((sum, item) => sum + item, 0);
    return balance;
    };
    bank.saveTransaction = function (id, amount) {
    const customer = this.checkId(id);
    customer.custTrans.push(amount);
    };
    bank.debit = function (id, amount) {
        /* make sure current balance is > amount */
//IMPLEMENT THIS
    let balance = this.getBalance(id);
    if (amount < 0) {
    console.log("Invalid amount. Please enter positive amount !");
    } else if (amount > balance) {
    console.log("Insufficient balance. Please try again !");
    } else {
    amount = amount * -1;
    balance += amount;
    this.saveTransaction(id, amount);
    }
    return balance;
    };
    bank.credit = function (id, amount) {
    let balance = this.getBalance(id);
    if (amount < 0) {
    console.log("Invalid amount. Please enter positive amount !");
    } else {
    balance += amount;
    this.saveTransaction(id, amount);
    }
    return balance;
    };
    bank.bankBalance = function(){
    const custArr = this.transactionDB;
    let sum = 0;
    for(const customer of custArr){
    const id = customer.custID;
    const custBalance = this.getBalance(id);
    sum += custBalance;
    }
    return sum;
    };
    console.log(bank.bankBalance());
   bank.debit(1,20);
   bank.credit(1,100);
   console.log(bank.bankBalance());