var dataArray = [{x:17,y:9},{x:30,y:4},{x:54,y:16},{x:31,y:13},{x:19,y:11},{x:11,y:127}]
var svg = d3.select("body")
            .append ("svg")
            .attr ("height","100%").attr("widht","100%");
var line = d3.line()
            .x(function(d,i){return d.x * 10;})
            .y(function(d,i){return d.y * 20;})
            .curve (d3.curve)
svg.append("path")
.attr("fill","none")
.attr("stroke","brown")
.attr("stroke-width","30")
    .attr("d", line(dataArray));

