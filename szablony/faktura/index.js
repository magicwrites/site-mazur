angular.module('invoice', []);

angular.module('invoice').directive('contenteditable', function contenteditable($compile) {
  return {
    scope: {
      parser: '=iParser',
      renderer: '=iRenderer',
    },
    restrict: 'A',
    require: '?ngModel',
    compile: function (tElement, tAttrs) {
      var tpl = tElement.contents();

      return function postLink(scope, element, attrs, ngModel) {
        if (!ngModel) {
          return;
        }

        $compile(tpl)(scope);

        ngModel.$render = function() {
          const value = scope.renderer ? scope.renderer(ngModel.$viewValue) : ngModel.$viewValue;

          element.html(value || '');
        };

        function read() {
          ngModel.$setViewValue(scope.parser(element.html()));
        }

        element.bind('keyup change blur', () => {
          scope.$apply(read);
        });
      };
    }
  };
});

angular.module('invoice').filter('roundup', function () {
  return function (value) {
    return Math.ceil(value);
  };
})

angular.module('invoice').filter('slownie', function () {
  const slownie = new window.Slownie();

  return function (value) {
    const parts = (value+'').split('.');

    if (parts.length > 1) {
      return `${slownie.get(parts[0])} złotych i ${slownie.get(parts[1])} groszy`;
    } else {
      return `${slownie.get(parts[0])} złotych`;
    }
  };
});

function getLastWorkDayOfCurrentMonth() {
  const nowAt = moment();
  const lastMonthDayAt = nowAt.endOf('month');

  if (lastMonthDayAt.format('ddd') === 'Sun') {
    return lastMonthDayAt.subtract(2, 'days');
  }

  if (lastMonthDayAt.format('ddd') === 'Sat') {
    return lastMonthDayAt.subtract(1, 'days');
  }

  return lastMonthDayAt;
}

angular.module('invoice').run(($rootScope, $filter) => {
  $rootScope.prices = {
    netto: 10000,
    vat: 0.23,
  };

  $rootScope.hours = {
    normal: 21 * 8,
    afterhours: 8,
    weekends: 0,
  };

  $rootScope.dates = {
    delay: 7,
    invoiced: getLastWorkDayOfCurrentMonth().format('DD-MM-YYYY'),
  };

  $rootScope.formats = {
    date: 'dd-MM-yyyy'
  };

  $rootScope.getDateFrom = (string) => {
    if (string.length !== 10) {
      return false;
    }

    const parts = string.split('-');
    const date = moment([ parts[2], parts[1]-1, parts[0] ]);

    return date.toDate();
  };

  $rootScope.parsePrice = (v) => {
    return parseInt(v.replace(/[^0-9\,]/g, ''), 10);
  };

  $rootScope.renderPrice = (p) => {
    return $filter('number')(p, 2);
  };

  $rootScope.parseDate = (v) => $rootScope.getDateFrom(v);

  $rootScope.getVat = (price) => price * $rootScope.prices.vat;

  $rootScope.getDueDate = (invoiced) => {
    const date = moment.isDate(invoiced) ? invoiced : new Date($rootScope.getDateFrom(invoiced));

    return moment(date).add($rootScope.dates.delay, 'days').toDate();
  }
});