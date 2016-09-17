APP = APP || {};

var Model = (function(Ajax) {

  var _breedList = [];
  var _puppyList = [];

  // takes json list of breeds and stores into breedList array
  var updateBreedList = function() {
    var promise = Ajax.getPuppyBreeds();
    promise.then(function(jsonList) {
      jsonList.forEach( function(el) {
        _breedList.push(el.name);
      });
      _breedList = _breedList.sort();
    })
    return promise;
  };

  // takes json list of puppies and stores into puppylist array
  var updatePuppyList = function() {
    var promise = Ajax.getPuppyList();
    promise.then(function(jsonList) {
      jsonList.forEach( function(el) {
        _puppyList.push(el.name + ", " + el.breed.name + "," + el.created_at);
        
      });
      //implement sort_by later
      // _breedList = _breedList.sort();
    })
    return promise;
  };

  // getter
  var getBreedList = function() {
    return _breedList;
  };
  // getter
  var getPuppyList = function() {
    return _puppyList;
  };

  return {
    getBreedList: getBreedList,
    getPuppyList: getPuppyList,
    updatePuppyList: updatePuppyList,
    updateBreedList: updateBreedList
  };

})(APP.Ajax);

APP.Model = Model;