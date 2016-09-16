var APP = APP || {};


var Ajax = (function() {

  var getPuppyList = function() {
    return $.get("https://ajax-puppies.herokuapp.com/puppies.json", function(json){
      return json;
    });

  };

  var getPuppyBreeds = function() {
    return $.get("https://ajax-puppies.herokuapp.com/breeds.json", function(json){
      return json;
    });
  };




  return {
    getPuppyList: getPuppyList,
    getPuppyBreeds: getPuppyBreeds
  }

})();


APP.Ajax = Ajax;