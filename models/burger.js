const orm = require(".././config/orm.js");

burger = {
  select: function(callback) {
    //This will go through the mysql library and push theburger types to burgers
    orm.selectAll(function(result) {
      //we should be using promises here instead
      callback(result);
    });
  }
};

module.exports = burger;
