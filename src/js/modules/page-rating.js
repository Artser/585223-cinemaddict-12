// Include Date Range Picker

(function () {
  if ($('#dateRange')) {
    $('#dateRange').dateRangePicker({
      separator: '&nbsp;&nbsp;',
      singleMonth: true,
      format: 'DD-MM-YYYY',
      startOfWeek: 'monday',
      endDate: moment(),
      getValue: function () {
          if ($('#dateRangeFrom').val() && $('#dateRangeTo').val())
              return $('#dateRangeFrom').val() + '&nbsp;&nbsp;' + $('#dateRangeTo').val();
          else
              return '';
      },
      setValue: function (s, s1, s2) {
          $('#dateRangeFrom').val(s1);
          $('#dateRangeTo').val(s2);
      },
    }).bind('datepicker-closed',function()
    {
        window.location =  '?from='+$('#dateRangeFrom').val()+'&to='+$('#dateRangeTo').val();
    });
  }
});

    // formstyler
  (function ($) {
    $(function () {
        $('.rating-style').styler({
            selectSearch: true,
        });
    });
  })(jQuery);

    // Tabs

    $('.rating-page__dashboard .profile-nav__item > div').click(function () {
        $('.page__tab').hide();
        $($(this).data('tab')).show();

        $('.profile-nav__item').removeClass('active');
        $(this).parent().addClass('active');

        if ($('#page__tab-3').css('display') !== 'none') {
            $('.rating-page__softline').show();
        } else {
            $('.rating-page__softline').hide();
        }
    });

    $('#page__tab-3').scroll(function () {
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            $('.rating-page__softline').hide();
        } else {
            $('.rating-page__softline').show();
        }
    });

    // Popup

    function positionPopup(popupClass) {
        var heightPopup = $('.popup:visible').height() / 2;
        if (typeof popupClass !== "undefined") {
            heightPopup = $('.' + popupClass + ' .popup').height() / 2;
        }
        var marginTop = $(window).height() / 2 - heightPopup;
        if (marginTop < 0) marginTop = 50;
        $('.popup-bg:visible > .popup').last().css('margin-top', marginTop);
    }

    $(function () {
        $('.get_voices').click(function (e) {
            e.preventDefault();
            $(".rating-popup").fadeOut();
            $(".header-wallet").click();
        });

    });


    // Charts

    var chart;
    var graph;


    window.graphDataLine = JSON.parse('[{"rating":1,"date":"01.10.2019"},{"rating":2,"date":"02.10.2019"},{"rating":1,"date":"03.10.2019"},{"rating":4,"date":"04.10.2019"}]');
    window.graphDataGistoramm = JSON.parse('[{"likes":2,"date":"1 \u043e\u043a\u0442","votes":0},{"likes":5,"date":"2 \u043e\u043a\u0442","votes":1},{"likes":1,"date":"3 \u043e\u043a\u0442","votes":0},{"likes":4,"date":"4 \u043e\u043a\u0442","votes":0},{"likes":3,"date":"5 \u043e\u043a\u0442","votes":0},{"likes":0,"date":"6 \u043e\u043a\u0442","votes":0},{"likes":2,"date":"7 \u043e\u043a\u0442","votes":0},{"likes":4,"date":"8 \u043e\u043a\u0442","votes":0},{"likes":2,"date":"9 \u043e\u043a\u0442","votes":3},{"likes":0,"date":"10 \u043e\u043a\u0442","votes":2},{"likes":9,"date":"11 \u043e\u043a\u0442","votes":0},{"likes":0,"date":"12 \u043e\u043a\u0442","votes":0},{"likes":0,"date":"13 \u043e\u043a\u0442","votes":0},{"likes":0,"date":"14 \u043e\u043a\u0442","votes":0},{"likes":0,"date":"15 \u043e\u043a\u0442","votes":0},{"likes":0,"date":"16 \u043e\u043a\u0442","votes":0},{"likes":0,"date":"17 \u043e\u043a\u0442","votes":0},{"likes":0,"date":"18 \u043e\u043a\u0442","votes":0},{"likes":0,"date":"19 \u043e\u043a\u0442","votes":0}]');

    var chartData = window.graphDataLine;
    var chartScrollbar = new AmCharts.ChartScrollbar();
    AmCharts.ready(function () {
        // SERIAL CHART
        chart = new AmCharts.AmSerialChart();

        chart.dataProvider = chartData;
        chart.marginLeft = 10;
        chart.categoryField = "date";
        chart.dataDateFormat = "DD.MM.YYYY";
        chart.zoomOutText = "Показать весь период";

        // listen for "dataUpdated" event (fired when chart is inited) and call zoomChart method when it happens
        // chart.addListener("dataUpdated", zoomChart);

        // AXES
        // category
        var categoryAxis = chart.categoryAxis;
        categoryAxis.parseDates = true;
        categoryAxis.dashLength = 3;
        categoryAxis.minorGridEnabled = true;
        categoryAxis.minorGridAlpha = 0.1;
        categoryAxis.labelFunction = function (valueText, date, categoryAxis) {
            return date.toLocaleDateString();
        };

        // value
        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.axisAlpha = 0;
        valueAxis.inside = false;
        valueAxis.labelsEnabled = false;
        valueAxis.dashLength = 3;
        chart.addValueAxis(valueAxis);

        // GRAPH
        graph = new AmCharts.AmGraph();
        // graph.type = "smoothedLine"; // this line makes the graph smoothed line.
        graph.lineColor = "#e54a69";
        graph.negativeLineColor = "#e54a69"; // this line makes the graph to change color when it drops below 0
        graph.bullet = "round";
        graph.bulletSize = 8;
        graph.bulletBorderColor = "#FFFFFF";
        graph.bulletBorderAlpha = 1;
        graph.bulletBorderThickness = 2;
        graph.lineThickness = 2;
        graph.valueField = "rating";
        graph.balloonText = "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>";
        chart.addGraph(graph);

        // CURSOR
        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.cursorAlpha = 0;
        chartCursor.cursorPosition = "mouse";
        chartCursor.categoryBalloonDateFormat = "DD.MM.YYYY";
        chart.addChartCursor(chartCursor);

        // SCROLLBAR
        // var chartScrollbar = new AmCharts.ChartScrollbar();
        // chart.addChartScrollbar(chartScrollbar);

        chart.creditsPosition = "bottom-right";

        // WRITE
        chart.write("chartdivGraph");
    });


    // this method is called when chart is first inited as we listen for "dataUpdated" event
    function zoomChart() {
        // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
        chart.zoomToDates(new Date(1972, 0), new Date(1984, 0));
    }


    // Chart gistogram

    var gistogramChart = AmCharts.makeChart("chartdivGistogram", {
        "type": "serial",
        "theme": "none",
        // "dataDateFormat": "DD.MM.YYYY",
        // "legend": {
        //     "horizontalGap": 10,
        //     "maxColumns": 1,
        //     "position": "right",
        //     "useGraphSettings": true,
        //     "markerSize": 10
        // },
        "dataProvider": window.graphDataGistoramm,
        "valueAxes": [{
            "stackType": "regular",
            "axisAlpha": 0.3,
            "gridAlpha": 1
        }],
        "valueAxis": [{
            "labelsEnabled": false,
            "inside": false
        }],
        "graphs": [
            {
                "balloonText": "Лайки:[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineColor": "#de2b53",
                "title": "Лайки",
                "type": "column",
                "valueField": "likes"
            },
            {
                "balloonText": "Голоса:[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineColor": "#ff9c50",
                "title": "Голоса",
                "type": "column",
                "valueField": "votes"
            }
        ],
        "categoryField": "date",
        "categoryAxis": {
            "gridPosition": "start",
            // "parseDates": true,
            "dashLength": 3,
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left"
            // "labelFunction": function (valueText, date, categoryAxis) {
            //     return date.toLocaleDateString();
            // }
        }

    });

    gistogramChart.addChartScrollbar(chartScrollbar);
    // Checkbox

    $('.rating-page__selector-checkbox-graph').click(function () {
        if ($(this).hasClass('graph')) {
            $(this).removeClass('graph').addClass('gistogram');
            $('.rating-page__designations-box-gistogram').show();
            $('.rating-page__designations-box-graph').hide();
            $('#chartdivGistogram').show();
            $('#chartdivGraph').hide();
        } else {
            $(this).removeClass('gistogram').addClass('graph');
            $('.rating-page__designations-box-graph').show();
            $('#chartdivGraph svg>g:eq(-2)').css('opacity', 0);
            $('.rating-page__designations-box-gistogram').hide();
            $('#chartdivGraph').show();
            $('#chartdivGistogram').hide();
        }
    });
//   }
// });
