APP = APP || {};

var View =  (function() {

  var renderDropDown = function(breedList) {
    $breedList = $('#breed-list');
    breedList.forEach( function(el) {
      $('<option>').text(el).appendTo($breedList);
    });
  };



  return {
    init: function(breedList) {
      renderDropDown(breedList);
    },
  };

})();


APP.View = View;