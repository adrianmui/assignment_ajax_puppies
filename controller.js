APP = APP || {};

var Controller = (function(View, Model, Ajax) {

  return {
    init: function() {
      var promiseArr = Model.update();
      var listenerPackage = $.when(
        promiseArr[0], //breedlistpromise
        promiseArr[1] //puppylistpromise
      );

      listenerPackage.done( function(breed, puppy) {
        View.render(Model.getBreedList(),
                    Model.getPuppyList());
      });

      // Model.update().then( function() {
      //   View.render(Model.getBreedList());
      // });
    }
  }
})(APP.View, APP.Model, APP.Ajax);


APP.Controller = Controller;