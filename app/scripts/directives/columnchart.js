'use strict';

angular.module('appsTfkWebstatistikkApp')
  .directive('columnchart', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {

        element.attr('id', attrs.id);

        function drawVisualization(url, divId, optsTitle) {
          var query = new google.visualization.Query(url);

          function handleQueryResponse(response) {
            if (response.isError()) {
              alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
              return;
            }

            var data = response.getDataTable();

            var options = {
              title: optsTitle
            };

            var chart = new google.visualization.ColumnChart(document.getElementById(divId));
            chart.draw(data, options);
          }
          query.send(handleQueryResponse);
        }

        function letsdoit() {
          drawVisualization(attrs.url, attrs.id, attrs.title);
        }

        letsdoit();

      }
    };
  });
