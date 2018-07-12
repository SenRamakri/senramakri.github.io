var chart = d3.chart.dependencyWheel();
d3.select('body')
  .datum(data)
  .call(chart);

