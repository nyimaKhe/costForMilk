function getMilk(money, bottle) {
  console.log("Getting milk...");
  console.log("Almost there ...");
  console.log("I am here...");
  console.log("You are able to buy " + numBottle(money, bottle) + " bottle of milk");
  console.log("Returning home with milk.");
  return remainderMoney(money, bottle);
}

function numBottle(cash, bottles) {
  var bottleBack = Math.floor(cash / bottles);
  return bottleBack;
}

function remainderMoney(amount, costPerBottle) {
  var change = money % costPerBottle;
  return change;
}
var cost = prompt("Enter Amount to buy milk: ");
var costperBottle = prompt("Enter price per bottle: ");

console.log("Here is the remainder of your money " +
  getMilk(cost, costperBottle));
