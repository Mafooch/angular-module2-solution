(function() {
"use strict";

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
  toBuyList.purchaseItem = function(itemIndex) {
    ShoppingListCheckOffService.transferItemToBought(itemIndex);
  };
}

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtItem();
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuy = [
    { name: "eggs", quantity: "1 dozen" },
    { name: "milk", quantity: "1 quart" },
    { name: "peanut butter", quantity: "2 jars" },
    { name: "eye of newt", quantity: "3" },
    { name: "ring to rule them all", quantity: "one" },
  ];

  var bought = [];
  service.getToBuyItems = function() {
    return toBuy;
  };

  service.getBoughtItem = function() {
    return bought;
  };

  service.transferItemToBought = function(index) {
    var newlyBoughtItem = toBuy.splice(index, 1)[0];
    bought.push(newlyBoughtItem);
  };
}
})();
