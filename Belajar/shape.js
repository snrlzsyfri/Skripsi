var dataArray = [ 2,13,15,33,44,55];
var dataFruit = ["orange","apple","banana","pome","grape","kiwi","strawbeery"];

var colorscal = d3.scaleSequential (d3.interpolateRainbow).domain([0,10]);
var x = d3.scaleBand()
        .domain(dataFruit)
        .range([0,550])
        .paddingInner (0,109);

var xAxis = d3.axisBottom(x);

var svg = d3.select ('body').append('svg').attr('height','100%').attr('width','100%');
svg.selectAll('rect')
    .data(dataArray)
    .enter().append('rect')
    .attr ('height',function (d,i){return d*10;})
    .attr ('width','70')
    .attr ('x',function (d,i) {return 80*i;})
    .attr ('fill', function(d,i) {return colorscal (i);})    
    .attr ('y',function (d,i) {return 350-(d*10)});
svg.append ("g")
        .attr("class","x axis hidden")
        .attr("transform","translate(0,350)")
        .call(xAxis);