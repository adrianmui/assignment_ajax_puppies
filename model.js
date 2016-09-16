APP = APP || {};

var Model = (function(Ajax) {

  var _breedList = [];

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

  // getter
  var getBreedList = function() {
    return _breedList;
  };

  var update = function() {
    return updateBreedList();
  }

  return {
    getBreedList: getBreedList,
    update: update
  }

})(APP.Ajax);

APP.Model = Model;