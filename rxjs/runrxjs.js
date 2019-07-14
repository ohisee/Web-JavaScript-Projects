/**
 * JavaScript
 */
var controller = (function () {

  var button = document.querySelector('.buttonClass');
  var input = document.querySelector('.inputClass1');
  var input2 = document.querySelector('.inputClass2');
  var inputM1 = document.querySelector('#input1');
  var inputM2 = document.querySelector('#input2');
  var span = document.querySelector('.spanClass');
  var p = document.querySelector('.results');
  var div = document.querySelector('.subject');
  var observer = {
    next: function (value) {
      console.log('Next', value);
    },
    error: function (error) {
      console.log('Error', error);
    },
    complete: function () {
      console.log('completed');
    }
  };

  var log = function (data, prefix = '') {
    var r = `<span>${prefix} ${data}</span>`;
    p.insertAdjacentHTML('beforeend', r);
  };

  var attachEvent = function () {
    button.addEventListener('click', function (event) {
      console.log('JS', event);
    });

    rxjs.fromEvent(button, 'click')
      .pipe(
        rxjs.operators.throttleTime(1000),
        rxjs.operators.map(function (event) {
          return event.clientY;
        }),
      )
      .subscribe(function (coordinate) {
        console.log('Rxjs', coordinate);
      });

    rxjs.fromEvent(input, 'input')
      .pipe(
        rxjs.operators.map(function (event) {
          return event.target.value;
        }),
        rxjs.operators.debounceTime(500),
        rxjs.operators.distinctUntilChanged(),
      )
      .subscribe({
        next: function (value) {
          console.log(value);
        }
      });

    rxjs.fromEvent(input2, 'input')
      .pipe(
        rxjs.operators.pluck('target', 'value'),
        rxjs.operators.debounceTime(500),
        rxjs.operators.distinctUntilChanged(),
      )
      .subscribe({
        next: function (value) {
          console.log('Input 2', value);
        }
      });
  };

  var makeObservable = function () {
    var subFromEvent = rxjs.fromEvent(button, 'click').subscribe(observer);
    var subFromCreate = rxjs.Observable.create(function (obs) {
      obs.next('Create value');
      // obs.error('Create error');
      setTimeout(function () {
        obs.complete();
        obs.next('Will not see this value');
      }, 2000);
      obs.next('Create another value');
      button.onclick = function (event) {
        obs.next(event);
      };
    }).subscribe(observer);
    setTimeout(function () {
      console.log(subFromEvent);
      console.log(subFromCreate);
      if (subFromEvent) {
        subFromEvent.unsubscribe();
      }
      if (subFromCreate) {
        subFromCreate.unsubscribe();
      }
    }, 5000);
  }

  var makeOperators = function () {
    var observerable = rxjs.interval(1000);
    var observerNextOnly = {
      next: function (value) {
        console.log(value);
      }
    };

    var sub = observerable.pipe(
      rxjs.operators.map(function (value) {
        return 'Number ' + value;
      }),
      rxjs.operators.throttleTime(2000),
    ).subscribe(observerNextOnly);

    setTimeout(function () {
      if (sub) {
        sub.unsubscribe();
        console.log('unsubscribe');
      }
    }, 10000);
  };

  var makeSubject = function () {
    var subject = new rxjs.Subject();
    subject.subscribe({
      next: function (value) {
        console.log('Subject', value);
      },
      error: function (error) {
        console.log('Subject error', error);
      },
      complete: function () {
        console.log('Subject completed');
      }
    });
    subject.subscribe({
      next: function (value) {
        console.log('Subject 2', value);
      },
    });
    subject.next('A new data piece');
    subject.complete();
    subject.next('Will not see this value');
  };

  var makeFilter = function () {
    var observerable = rxjs.interval(1000);
    var sub = observerable.pipe(
      rxjs.operators.filter(function (value) {
        return value % 2 == 0;
      })
    ).subscribe({
      next: function (value) {
        console.log('Filter operator', value);
      },
      error: function (error) {
        console.log('Filer error', error);
      }
    });
    setTimeout(function () {
      if (sub) {
        sub.unsubscribe();
        console.log('unsubscribe');
      }
    }, 10000);
  };

  var makeScanReduce = function () {
    var observerable = rxjs.of(1, 2, 3, 4, 5, 6);
    observerable.pipe(
      rxjs.operators.reduce(function (total, currentValue) {
        return total + currentValue;
      }, 0)
    ).subscribe({
      next: function (value) {
        console.log('Reduce', value);
      }
    });

    observerable.pipe(
      rxjs.operators.scan(function (total, currentValue) {
        return total + currentValue;
      }, 0)
    ).subscribe({
      next: function (value) {
        console.log('Scan', value);
      }
    });
  };

  var makeMergeMap = function () {
    var obs1 = rxjs.fromEvent(inputM1, 'input');
    var obs2 = rxjs.fromEvent(inputM2, 'input');

    obs1.pipe(
      rxjs.operators.mergeMap(function (event1) {
        return obs2.pipe(
          rxjs.operators.map(function (event2) {
            return event1.target.value + ' ' + event2.target.value;
          })
        );
      })
    ).subscribe(function (combinedValue) {
      span.textContent = combinedValue;
    });
  };

  var makeSwitchMap = function () {
    var obs1 = rxjs.fromEvent(button, 'click');
    var obs2 = rxjs.interval(1000);

    // obs1.subscribe(function (event) {
    //   var sub = obs2.subscribe(function (value) {
    //     console.log(value);
    //   });
    //   setTimeout(function () {
    //     if (sub) {
    //       sub.unsubscribe();
    //       console.log('unsubscribe');
    //     }
    //   }, 10000);
    // });

    var sub = obs1.pipe(
      rxjs.operators.switchMap(function (event) {
        return obs2;
      })
    ).subscribe(function (value) {
      console.log(value);
    });

    setTimeout(function () {
      if (sub) {
        sub.unsubscribe();
        console.log('unsubscribe');
      }
    }, 10000);
  };

  var makeBehaviorSubject = function() {
    var subject = new rxjs.BehaviorSubject('Not clicked');
    button.addEventListener('click', function() {
      subject.next('Clicked');
    });
    subject.subscribe(function(value) {
      div.textContent = value;
    });
  };

  return {
    init: function () {
      // attachEvent();
      // makeObservable();
      // makeOperators();
      // makeSubject();
      // makeFilter();
      // makeScanReduce();
      // makeMergeMap();
      // makeSwitchMap();
      makeBehaviorSubject();
    }
  };

})();

controller.init();