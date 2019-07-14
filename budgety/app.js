// controller module 
// using IIFE
var budgetController = (function () {

  // private variables
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calculatePercentage = function (totalIncome) {
    if (totalIncome > 0) {
      var percent = (this.value / totalIncome) * 100;
      var round = Math.round(percent);
      this.percentage = round === 0 ? percent.toFixed(3) : round;
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // private function
  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (current) {
      sum = sum + current.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      expense: [],
      income: []
    },
    totals: {
      expense: 0,
      income: 0,
    },
    budget: 0,
    percentage: -1,
  };

  // return a function to be used in outside scope
  // public methods
  return {
    addItem: function (type, des, val) {
      var newItem, ID;

      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      if (type === 'expense') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'income') {
        newItem = new Income(ID, des, val);
      }

      data.allItems[type].push(newItem);

      // Return the new element
      return newItem;
    },

    deleteItem: function (type, id) {
      var ids, index;

      ids = data.allItems[type].map(function (current) {
        return current.id;
      });

      index = ids.indexOf(parseInt(id));

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function () {

      // 1 calculate total income and expenses
      calculateTotal('expense');
      calculateTotal('income');

      // 2 calculate the budget: income - expenses
      data.budget = data.totals.income - data.totals.expense;

      // 3. calculate the percentage of income that we spent
      if (data.totals.income > 0) {
        var percentage = (data.totals.expense / data.totals.income) * 100;
        var round = Math.round(percentage);
        data.percentage = round === 0 ? percentage.toFixed(3) : round;
      } else {
        data.percentage = -1;
      }
    },

    calculatePercentages: function () {
      data.allItems.expense.forEach(function (current) {
        current.calculatePercentage(data.totals.income);
      });
    },

    getPercentages: function () {
      var allPerc = data.allItems.expense.map(function (current) {
        return current.getPercentage();
      });
      return allPerc;
    },

    getBudget: function () {
      return {
        budget: data.budget,
        totalIncome: data.totals.income,
        totalExpense: data.totals.expense,
        percentage: data.percentage,
      };
    },

    test: function () {
      console.log(data);
    }
  }

})(); // immediately called

// UI controller
var UIController = (function () {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercentageLabel: '.item__percentage',
    tooltipText: '.tooltiptext',
    dateLabel: '.budget__title--month',
  };

  var formatNumber = function (type, num) {
    var numSplit, num, numSplit, int, dec;

    num = Math.abs(num);
    num = num.toFixed(2);
    numSplit = num.split('.');
    int = numSplit[0];
    if (int.length > 3) {
      var holder = '', b = -3, e = int.length;
      for (var i = 0; i < Math.ceil(int.length / 3); i++) {
        var t = int.slice(b, e);
        holder = holder.length === 0 ? t : t + ',' + holder;
        b = b - 3;
        e = e - 3;
      }
      int = holder;
    }

    dec = numSplit[1];

    return (type === 'expense' ? '-' : '+') + ' ' + int + '.' + dec;
  };

  var nodeListForEach = function (list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  return {
    getinput: function () {
      var type = document.querySelector(DOMstrings.inputType).value; // either inc or exp
      var description = document.querySelector(DOMstrings.inputDescription).value;
      var value = document.querySelector(DOMstrings.inputValue).value;
      return {
        type: type,
        description: description,
        value: parseFloat(value),
      };
    },

    addListItem: function (obj, type) {
      var html, newHtml, element;

      // create html string with placeholder text
      if (type === 'income') {
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="income-%id%">' +
          '<div class="item__description">%description%</div>' +
          '<div class="right clearfix">' +
          '<div class="item__value">%value%</div>' +
          '<div class="item__delete">' +
          '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
          '</div>' +
          '</div>' +
          '</div>';
      } else if (type === 'expense') {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="expense-%id%">' +
          '<div class="item__description">%description%</div>' +
          '<div class="right clearfix">' +
          '<div class="item__value">%value%</div>' +
          '<div class="item__percentage">21%</div>' +
          '<div class="item__delete">' +
          '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
          '</div>' +
          '</div>' +
          '</div>';
      }

      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', formatNumber(type, obj.value));

      // inserr the html into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    deleteListItem: function (selectorId) {
      var el = document.getElementById(selectorId)
      el.parentNode.removeChild(el);
    },

    clearFields: function () {
      var fields, fieldArr;
      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

      fieldArr = Array.prototype.slice.call(fields);

      fieldArr.forEach(function (current, index, array) {
        current.value = "";
      });

      fieldArr[0].focus();
    },

    displayBudget: function (obj) {
      var type;
      obj.budget > 0 ? type = 'income' : type = 'expense';

      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(type, obj.budget);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber('income', obj.totalIncome);
      document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber('expense', obj.totalExpense);

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },

    displayPercentages: function (percentages) {
      var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);

      nodeListForEach(fields, function (current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
      });
    },

    displayTip: function () {
      document.querySelector(DOMstrings.tooltipText).style.visibility = "visible";
    },

    hideTip: function () {
      document.querySelector(DOMstrings.tooltipText).style.visibility = "hidden";
    },

    getMaxValue: function () {
      return 900000;
    },

    displayMonth: function () {
      var now, month, year, months;
      now = new Date();
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];
      month = now.getMonth();
      year = now.getFullYear();
      document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
    },

    changeType: function () {
      var fields = document.querySelectorAll(
        DOMstrings.inputType + ',' +
        DOMstrings.inputDescription + ',' +
        DOMstrings.inputValue
      );

      nodeListForEach(fields, function(current) {
        current.classList.toggle('red-focus');
      });

      document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
    },

    getDOMstrings: function () {
      return DOMstrings;
    }
  };
})();

// Global app controler
var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();
    var maxAmount = UICtrl.getMaxValue();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    // Key press
    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputValue).addEventListener('input', function () {
      if (this.value > maxAmount) {
        UICtrl.displayTip();
      } else {
        UICtrl.hideTip();
      }
    });

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);
  }

  var updateBudget = function () {

    // 1. calculate the budget
    budgetCtrl.calculateBudget();

    // 2. return the budget
    var budget = budgetCtrl.getBudget();

    // 3. display the budget ont UI
    UICtrl.displayBudget(budget);
  };

  var ctrlAddItem = function () {
    var input, newItem, maxAmount;
    // 1. Get the field input data
    input = UICtrl.getinput();
    maxAmount = UICtrl.getMaxValue();

    if (input.description !== ""
      && !isNaN(input.value)
      && input.value > 0
      && input.value < maxAmount) {
      // 2. add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. add the item to the UI
      UICtrl.addListItem(newItem, input.type);

      // 4. clear the fields
      UICtrl.clearFields();

      // 5. calculate and update budget
      updateBudget();

      // 6. calculate and update percentages
      updatePercentages();
    }
  };

  var updatePercentages = function () {

    // 1 calculate percentages
    budgetCtrl.calculatePercentages();

    // 2 read percentages from the budget controller
    var percentages = budgetCtrl.getPercentages();

    // 3 update the UI with the new percentages
    UICtrl.displayPercentages(percentages);
  };

  var ctrlDeleteItem = function (event) {
    var itemId, splitId, type, id,

      itemId = event.target.parentNode.parentNode.parentNode.id;

    if (itemId) {
      splitId = itemId.split('-');
      type = splitId[0];
      id = splitId[1];

      // 1 delete the item from the data structure
      budgetCtrl.deleteItem(type, id);

      // 2 delete the item from the UI
      UICtrl.deleteListItem(itemId);

      // 3 update and show the new budget
      updateBudget();

      // 4 calculate and update percentages
      updatePercentages();
    }
  };

  return {
    init: function () {
      console.log('Application init');
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalIncome: 0,
        totalExpense: 0,
        percentage: -1,
      });
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();