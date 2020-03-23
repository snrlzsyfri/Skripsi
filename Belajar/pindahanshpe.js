
var fixedx= 500;
var svg2 = d3.select ('body').append('svg2').attr('height','100%').attr('width','100%');
svg2.selectAll('circle')
    .data(dataArray)
    .enter().append('circle')
    .attr('cx',function (d,i) { fixedX +=(d*8)+(i*30); return fixedX ;})
    .attr('cy','150')
    .attr('r',function (d,i) {return d*4;});


var fixedx= 600;
var svg3 = d3.select ('body').append('svg3').attr('height','100%').attr('width','100%');
svg3.selectAll('line')
    .data(dataArray)
    .enter().append('line')
    .attr ('x1',fixedX )
    .style('stroke','orange')
    .attr('stroke','yellow')
    .attr ('stroke-width',3)
    .attr ('y1',function (d,i) {return 70+ (i*20)})
    .attr ('x2', function (d) {return fixedX +(d*20);})
    .attr ('y2',function (d,i) {return 70 + (i+20);});
 var fixedx= 700;
svg.selectAll('ellipse')
    .data(dataArray)
    .enter().append('ellipse')
    .attr ('cx', function (d,i) {fixedX += (d*4)+(30); return fixedX;})
    .attr ('cy', '150')
    .attr ('rx', function (d) {return d*2;})
    .attr ('ry', 250);

    var fixedX=0;
svg.append ('text')
    .attr('x1', fixedX)
    .attr ('y1', function (d,i) {return 400+(i*20);})
    .attr ('x2', function (d) {fixedX+(d*20);})
    .attr ('y2', function (d,i) {return 400+(i*20);})

var fixedX = 500;
svg.append ('text')
    .attr('x'. fixedX)
    .attr('y','500')
    .attq('stroke','red')
    .attr ('stroke-width','2')
    .attr('text-anchor','start')
    .attr ('dominant-baseline','middle')
    .attr ('font-size', 50)
    .text ('try');

    svg.append ('text')
        .attr ('x', fixedX)
        .attr ('y', 580)
        .attr ('font-size', 50)
        .text ('trying again');

