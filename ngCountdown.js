(function(angular) {
  angular.module('ngCountdown', ['ng'])
    .directive("ngCountdown", function($rootScope) {
      return {
        link: function(scope, element, attrs) {

          // Set Function Section
          scope.setCountdown = function(option) {
            var flipClockInstance = element.FlipClock(scope.time, option);
            if(scope.time){
              flipClockInstance.setTime(scope.time);
            }
            if (attrs.ngCountdownInstance) scope.instance = flipClockInstance;
          };

          // Initialize Function Section
          scope.initialize = function() {
            element.css('width', 'auto');
            element.css('display', 'inline-block');
            scope.setCountdown(scope.option);
          };

          scope.initialize();
        },
        scope: {
          option: "=ngCountdownOption",
          time: "=ngCountdownTime",
          instance: "=ngCountdownInstance"
        },
        replace: true,
        restrict: "E"
      };
    });
})(angular);
