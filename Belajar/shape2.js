var dataArray = [200,70,100,13,15,4,5,45,6,22,11,44];//d
var dataMonths = [ 1,2,3,4,5,6,7,8,9,10,11,12];


var crvTypes = [d3.curveCardinal, d3.curveBasis, d3.curveLinear, d3.curveStep, d3.curveNatural];//jenis curve yang akan di tampilkan

var height = 300; //tinggi
var width = 1000; // lebar

var parseMonth = d3.timeParse("%m");
console.log (parseMonth(12));
console.log(12);


var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%"); // cakupan tampilan
var y = d3.scaleLinear().domain([0,360]).range([height,0]);// mengatur skla pada koordinat sumbu x
var x = d3.scaleTime ()
            .domain([d3.min(dataMonths, function(d){return parseMonth(d);}),
                    d3.max(dataMonths,function(d){return parseMonth(d);})])
            .range([0,width]);

var yAxis = d3.axisLeft(y).ticks(6).tickPadding(20); //mengatur posisi dmna koordinat diletakkan (**)
var xAxis = d3.axisBottom(x);

for(var t=0;t<1;t++){ // looping untuk grafik 
var area = d3.area ()// mengatur tinggi dan panjang dari grafik
            .x(function (d,i) {return x(parseMonth(dataMonths[i]))})
            .y0 (height)
            .y1(function(d){ return height-d;})
            .curve(crvTypes[t]);


var grp = svg.append ("g").attr("class","grp"+t).attr ("transform","translate("+5+(t*500)+",50)");//mengukur jarak antar grafik 
                                                                                                   // fungsi transform untuk mengubah kondisi dari (**)                 


grp.append("g").attr("class","axis y").call(yAxis); // memmangggil koordinat yang sudah di inisialisasi dengan yaxis
grp.append("g").attr("class","axis x").attr("transform","translate(0,"+height+")").call(xAxis);//memanggil koordinat yang sudah di inisialisasi dengan xaxis

grp.append("path")//memberikan pengaturan pada grafik seperti warna dan ketebalan garis
    .attr("fill","none")
    .attr("stroke","black")
    .attr("stroke-width","1")
    .attr("d", area(dataArray));

grp.selectAll("circle.grpcircle"+t)//inisialisasi grafik dengan fungsi, dalam circle ada cx,cy, dan r-> ini untuk membuat titik titik pada garis sehingga tterdapat pentol nya 
    .data (dataArray)
    .enter().append("circle")
    .attr("class",function (d,i) {return "grpcircle"+t;})
    .attr("cx",function (d,i) {return x(parseMonth(dataMonths[i]))})
    .attr("cy",function(d){ return height-d;})
    .attr("r","2")
}