var parseDate = d3.timeParse("%m/%d/%Y");
d3.csv("test.csv")
    .row(function(d){return{date:parseDate(d.date),price:Number(d.price.trim().slice(1))};})
    .get(function(error,data){
        console.log(data)
    

        var height = 400;
        var width = 600;

        var maxDate = d3.max(data,function(d) {return d.date;});
        var minDate = d3.min(data,function(d) {return d.date;});
        var maxPrice = d3.max(data,function(d) {return d.price;});
        
        var y = d3.scaleLinear()
                    .domain([0, maxPrice])
                    .range([height,0]);

        var x = d3.scaleTime()
                    .domain([minDate,maxDate])
                    .range ([0,width]);

        var yaxis = d3.axisLeft(y);
        var xaxis = d3.axisBottom(x);

    

        var svg = d3.select('body').append('svg')
                    .attr('height','100%')
                    .attr('widht','100%')

        var chartGroup = svg.append ('g')
                            .attr('transform','translate(50,50)');
        var line = d3.line()
                     .x(function(d){return x (d.date);})
                     .y(function(d){return y (d.price);});
        chartGroup.append('path').attr('d',line(data));


});