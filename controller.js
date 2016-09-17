APP = APP || {};

var Controller = (function(View, Model, Ajax) {

  return {
    init: function() {
      var puppyPromise = Model.updatePuppyList();
      var breedPromise = Model.updateBreedList();

      puppyPromise.done( function( puppy){
        View.renderPuppyList(Model.getPuppyList());
      });
      
      breedPromise.done( function( breed){
        View.renderDropDown(Model.getBreedList());
      });

                
    }
  }
})(APP.View, APP.Model, APP.Ajax);


APP.Controller = Controller;