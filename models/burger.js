const orm = require ('.././config/orm.js');



burger = {

select: function(stupidasscallback){
//This will go through the mysql library and push theburger types to burgers
orm.selectAll(function(result) {
    //we should be using promises here instead 
    stupidasscallback(result)
    })
},

}


module.exports = burger;
    
