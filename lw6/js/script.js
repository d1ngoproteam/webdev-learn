class CoffeMachine {
    
  constructor(balance, coffeeMenu, currentCoffeeNumber) {
    this.balance = 0;
    this.currentCoffeeNumber = currentCoffeeNumber;
    this.coffeeMenu = [ { id: 1, name: "Американо", price: 10 },
                        { id: 2, name: "Латте", price: 15 },
                        { id: 3, name: "Каппучино", price: 20 }
                      ];
  }

  checkMoney(money) {
    return money == 1 || money == 2 || money == 5 || 
           money == 10 || money == 50 || money == 100;
  } 

  setCash(cash) {
    if (this.checkMoney(cash)) {
      this.balance += cash;
      return true;
    }
    return false;
  }

  getCoffeeMenu() {
    this.coffeeMenu.forEach(function(item, i) {
      console.log(item.id + ' - ' + item.name + ' (' + 
                  item.price + ' руб.)');
    }, this);
  }

  checkNumberCoffee(number) {
    if ((number >= 1 ) && (number <= this.coffeeMenu.length)) {
      return true;
    }
    return false;
  }

  checkEnoughMoney(coffeeNumber) {
    if (this.balance >= this.coffeeMenu[coffeeNumber].price) {
      return true;
    }
    return false;
  }

  chooseCoffee(coffeeNumber) {
    if (this.checkNumberCoffee(coffeeNumber) && 
        this.checkEnoughMoney(coffeeNumber - 1)) {
      this.currentCoffeeNumber = coffeeNumber;
      return true;
    }
    return false;
  }

  calculateRemain() {
    return this.balance - this.coffeeMenu[this.currentCoffeeNumber - 1].price;
  }

  getRemainCash() {
    return this.calculateRemain();
  }
}