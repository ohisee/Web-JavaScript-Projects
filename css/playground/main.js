/**
 * JavaScript
 */
var activeViewLink = (function () {

  var links = document.querySelectorAll('.main__nav--item a');

  var attachActiveClass = function () {
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        var currentActive = document.querySelector('.main__nav--item a.active');
        if (currentActive) {
          currentActive.classList.remove('active');
        }
        this.classList.add('active');
      });
    }
  }

  return {
    init: function () {
      attachActiveClass();
    }
  };

})();

activeViewLink.init();