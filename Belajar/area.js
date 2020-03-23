dataArray=[14,35,56,67,99,122,150,160,233,300,322,360,10,9,0,100];// i
var dataMonts= [1,2,3,4,5,6,7,8,9,10,11,12];

var crvTypes = [d3.curveCardinal,d3.curveBasis,d3.curvesLinear,d3.curveStep,d3.curveNatural]; // jenis jenis curve pada tampilan grafiknya

var height = 400;
var width = 1000;

var svg = d3.select("body").append ("svg").attr("height","100%").attr("width","100%");//visualisasi grafik yang diinginkan 
var y = d3.scaleLinear().domain([0,360]).range ([height,0]);// untuk membuat garis koordinatnya
var yAxis = d3.axisRight(y);//posisi koordinat
for (var t=0;t<5;t++){//looping grafik yang telah dia tur menggunakan crvtypes
var area = d3.area()//pengaturan grafik
                .x(function (d,i) {return i*20;})
                .y0(height)
                .y1(function(d){return y(d);})
                .curve(crvTypes[t]);

var grp = svg.append ("g").attr("class","grp"+t).attr("transform","translate("+t*500+",0)");//jarak antar grafiknya di atur disni
grp.append ("g").attr("class","axis y").call(yAxis);
grp.append ("path")
    .attr ("fill","none")
    .attr ("stroke","black")
    .attr ("stroke-width","1")
    .attr ("d",area (dataArray));

grp.selectAll ("circle.grpcircle"+t)
    .data (dataArray)
    .enter ().append ("circle")
    .attr ("class",function (d,i){return "grpcircle"+t;})
    .attr ("cx", function (d,i) { return i*20})
    .attr ("cy",function (d) {return y(d);})
    .attr ("r","2");//untuk titik hitam yang menandakan posisi grafiknya
}