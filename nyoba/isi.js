var dataArray = [ 1,3,5,7,9]
var svg = d3.select ('body').append('svg').attr('height','100%').attr('width','100%');
svg.append('line')
.data(dataArray)
    .enter().append('line')
    .attr ('x1',fixedX )
    .style('stroke','orange')
    .attr('stroke','yellow')
    .attr ('stroke-width','3')
    .attr ('y1',function (d,i) {return 70+ (i*20)})
    .attr ('x2', function (d) {return fixedX +(d*20);})
    .attr ('y2',function (d,i) {return 70 + (i+20);});