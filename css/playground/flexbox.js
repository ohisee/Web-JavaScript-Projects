/**
 * JavaScript
 */
var activeViewLink = (function () {

  var DomStrings = {
    links: '.main_header--nav--item a',
    itemActive: '.main_header--nav--item a.active',
    mainSection: '.main__section',
    mainHeader: '.main_header'
  };

  var links = document.querySelectorAll(DomStrings.itemActive);
  var mainSection = document.querySelector(DomStrings.mainSection);
  var mainHeader = document.querySelector(DomStrings.mainHeader);

  var attachActiveClass = function () {
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        var currentActive = document.querySelector(DomStrings.itemActive);
        if (currentActive) {
          currentActive.classList.remove('active');
        }
        this.classList.add('active');
      });
    }
  };

  var attachWayPoint = function () {
    var waypoint = new Waypoint({
      element: mainSection,
      handler: function (direction) {
        if (direction === 'down') {
          mainHeader.classList.add('sticky');
        } else {
          mainHeader.classList.remove('sticky');
        }
      }
    });
  };

  return {
    init: function () {
      attachActiveClass();
      attachWayPoint();
    }
  };

})();

activeViewLink.init();