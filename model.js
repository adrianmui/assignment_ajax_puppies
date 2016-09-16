APP = APP || {};

var Model = (function(Ajax) {

  var _breedList = [];

  // takes json list of breeds and stores into breedList array
  var parseJsonBreedList = function() {
    var jsonList = Ajax.getPuppyBreeds();
    debugger;
    jsonList.forEach( function(el) {
      breedList.push(el.name);
    });
    breedList = breedList.sort();
  };

  // getter
  var getBreedList = function() {
    return _breedList;
  }

  return {
    init: function () {
      //console.log(this);
      parseJsonBreedList();
    },

    getBreedList: getBreedList,

  }

})(APP.Ajax);

APP.Model = Model;