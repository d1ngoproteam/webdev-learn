'use strict';

class CoffeeMachine {
  constructor() {
    this.balance = 0;
    this.coffeeMenu = [ 
      { coffeeId: 1, coffeName: 'Американо', price: 10 },
      { coffeeId: 2, coffeName: 'Латте', price: 15 },
      { coffeeId: 3, coffeName: 'Каппучино', price: 20 }
    ];
    this.coffeeNumber = null;
  }

  setCash(cash) {
    if (this.checkCash(cash)) {
      this.balance += cash;
      return true;
    }
    return false;
  }

  checkCash(cash) {
    return cash === 1 || cash === 2 || cash === 5 || 
           cash === 10 || cash === 50 || cash === 100;
  }

  getCoffeeMenu() {
    for (let i = 0; i < this.coffeeMenu.length; i++) {
      console.log(this.coffeeMenu[i].coffeeId + ' - ' + 
                  this.coffeeMenu[i].coffeName + ' (' + 
                  this.coffeeMenu[i].price + ' руб.)');
    }
  }

  chooseCoffee(coffeeNumber) {
    if (this.checkCoffeeNumber(coffeeNumber) && 
        this.checkEnoughMoney(coffeeNumber - 1)) {
      this.coffeeNumber = coffeeNumber;
      return true;
    }
    return false;
  }

  checkCoffeeNumber(number) {
    return (this.coffeeMenu.find(item => item.coffeeId === number) !== undefined) ? true : false;
  }

  checkEnoughMoney(coffeeNumber) {
    return (this.balance >= this.coffeeMenu[coffeeNumber].price);
  }

  calculateRemain() {
    return this.balance - this.coffeeMenu[this.coffeeNumber - 1].price;
  }

  getRemainCash() {
    return this.calculateRemain();
  }
}

module.exports = CoffeeMachine;