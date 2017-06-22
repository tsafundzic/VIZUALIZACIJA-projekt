
//////////////////////////////////////////////////
///////////////// P R V I /////////////////
//////////////////////////////////////////////////
//http://jsfiddle.net/6cJ5c/45/

var colors = ['#333', '#7e67ad', '#A18648', '#63A148', '#00797d', '#8b0000' ];
format = d3.format(",");

var update;
var data = [];

d3.json("data2.json",  function(error, data) {
      if (error) throw error;

var	margin = {top: 80, right: 40, bottom: 50, left: 80},
	width = 400 - margin.left - margin.right,
	height = 650 - margin.top - margin.bottom;

var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var y_kontinentalna = d3.scale.linear().range([height, 0]);
var y_jadranska = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom")
	.ticks(5)
	.tickFormat(d3.format("d"));
var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left")
	.ticks(20);
var yAxis2 = d3.svg.axis()
	.scale(y_kontinentalna)
	.orient("left")
	.ticks(20);
var yAxis3 = d3.svg.axis()
	.scale(y_jadranska)
	.orient("left")
	.ticks(20);

var area_perad = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y(d.perad_ukupno); });

var area_koze = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y(d.koze_ukupno); });

var area_svinje = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y(d.svinje_ukupno); });

var area_goveda = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y(d.svinje_ukupno); });

var area_ovce = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y(d.svinje_ukupno); });

var valueline_perad = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y(d.perad_ukupno); });
var valueline_koze = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y(d.koze_ukupno); });
var valueline_svinje = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y(d.svinje_ukupno); });
var valueline_goveda = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y(d.goveda_ukupno); });
var valueline_ovce = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y(d.ovce_ukupno); });

var svg = d3.select("#linediv").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.attr("id", "svg_ukupna")
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var div = d3.select("body").append("div")
	.attr("class", "tooltip")
	.style("opacity", 0);

function make_x_axis() {
	return d3.svg.axis()
	.scale(x)
	.orient("bottom")
	.ticks(5)
}
function make_y_axis() {
	return d3.svg.axis()
	.scale(y)
	.orient("left")
	.ticks(5)
}
function make_y_axis2() {
	return d3.svg.axis()
	.scale(y_kontinentalna)
	.orient("left")
	.ticks(5)
}
function make_y_axis3() {
	return d3.svg.axis()
	.scale(y_jadranska)
	.orient("left")
	.ticks(5)
}

	x.domain([data[0].godina, data[data.length - 1].godina]);
	y.domain([d3.min(data, function(d) { return Math.min( d.perad_ukupno, d.koze_ukupno, d.ovce_ukupno, d.svinje_ukupno, d.goveda_ukupno); }), d3.max(data, function(d) { return Math.max( d.perad_ukupno, d.koze_ukupno, d.ovce_ukupno, d.svinje_ukupno, d.goveda_ukupno); })*1.1]);

	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "10px")
			.attr("dy", "12px");
	
	svg.append("text")
		.attr("x", width / 2)
		.attr("y", height + margin.bottom)
		.style("text-anchor", "middle")
		.style("fill", "#999") 	
		.text("Godine");

	svg.append("g")
		.attr("class", "y axis")
		.call(yAxis);

	svg.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 0 + (-margin.left))
		.attr("x",0 - (height / 2))
		.attr("dy", "12px")
		.style("text-anchor", "middle")
		.style("fill", "#999") 		
		.text("Količina");

	svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "15px") 
		.style("font-weight", "bold") 
		.style("fill", "#666") 		
        .text("Cijela RH");
	
	svg.append("g")
		.attr("id", "gridx")
		.attr("class", "grid")
		.attr("transform", "translate(0," + height + ")")
		.call(make_x_axis()
			.tickSize(-height, 0, 0)
			.tickFormat("")
		);
	svg.append("g")
		.attr("id", "gridy")
		.attr("class", "grid")
		.call(make_y_axis()
			.tickSize(-width, 0, 0)
			.tickFormat("")
		);

    var perad = svg.append('g').classed('perad', true);
    var koze = svg.append('g').classed('koze', true);
    var svinje = svg.append('g').classed('svinje', true);
    var goveda = svg.append('g').classed('goveda', true);
    var ovce = svg.append('g').classed('ovce', true);
	
	perad.append("path")
		.datum(data)
		.attr("id", "area_perad")
		.attr("class", "area");	
	perad.append("path")
		.attr("d", valueline_perad(data))
		.attr("id", "line_perad")
		.style("stroke", colors[1])
		.style("stroke-width", "4px")
		.style("opacity", .7);
	
	koze.append("path")
		.datum(data)
		.attr("id", "area_koze")
		.attr("class", "area");
	koze.append("path")
		.attr("d", valueline_koze(data))
		.attr("id", "line_koze")
		.style("stroke", colors[2])
		.style("stroke-width", "4px")
		.style("opacity", .7);

	svinje.append("path")
		.datum(data)
		.attr("id", "area_svinje")
		.attr("class", "area");
	svinje.append("path")
		.attr("d", valueline_svinje(data))
		.attr("id", "line_svinje")
		.style("stroke", colors[3])
		.style("stroke-width", "4px")
		.style("opacity", .7);

	goveda.append("path")
		.datum(data)
		.attr("id", "area_goveda")
		.attr("class", "area");
	goveda.append("path")
		.attr("d", valueline_goveda(data))
		.attr("id", "line_goveda")
		.style("stroke", colors[4])
		.style("stroke-width", "4px")
		.style("opacity", .7);

	ovce.append("path")
		.datum(data)
		.attr("id", "area_ovce")
		.attr("class", "area");
	ovce.append("path")
		.attr("d", valueline_ovce(data))
		.attr("id", "line_ovce")
		.style("stroke", colors[5])
		.style("stroke-width", "4px")
		.style("opacity", .7);
	
	var circle_perad = perad.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y(d.perad_ukupno); })
			.style("fill", colors[0])
			.style("stroke", colors[1])
			.style("stroke-width", "3px")
			.style("opacity", .7)
			.on("mouseover", function(d) {
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Perad | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.perad_ukupno) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});
	
	var circle_koze = koze.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y(d.koze_ukupno); })
			.attr("class", "tooltips")
			.style("fill", colors[0])
			.style("stroke", colors[2])
			.style("stroke-width", "3px")
			.style("opacity", .7)
			.on("mouseover", function(d) {
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Koze | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.koze_ukupno) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});

	var circle_svinje = svinje.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y(d.svinje_ukupno); })
			.style("fill", colors[0])
			.style("stroke", colors[3])
			.style("stroke-width", "3px")
			.style("opacity", .8)
			.on("mouseover", function(d) {
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Svinje | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.svinje_ukupno) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});

	var circle_goveda = goveda.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y(d.goveda_ukupno); })
			.attr("class", "tooltips")
			.style("fill", colors[0])
			.style("stroke", colors[4])
			.style("stroke-width", "3px")
			.style("opacity", .8)
			.on("mouseover", function(d) {
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Goveda | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.goveda_ukupno) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});

	var circle_ovce = ovce.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y(d.ovce_ukupno); })
			.attr("class", "tooltips")
			.style("fill", colors[0])
			.style("stroke", colors[5])
			.style("stroke-width", "3px")
			.style("opacity", .8)
			.on("mouseover", function(d) {
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Ovce | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.ovce_ukupno) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});









/////////////////////////////////////
//////D R U G I /////////////////////
////////////////////////////////////

var area_perad2 = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y_kontinentalna(d.perad_kontinentalna); });

var area_koze2 = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y_kontinentalna(d.koze_kontinentalna); });

var area_svinje2 = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y_kontinentalna(d.svinje_kontinentalna); });

var area_goveda2 = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y_kontinentalna(d.svinje_kontinentalna); });

var area_ovce2 = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y(d.svinje_kontinentalna); });

var valueline_perad2 = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y_kontinentalna(d.perad_kontinentalna); });
var valueline_koze2 = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y_kontinentalna(d.koze_kontinentalna); });
var valueline_svinje2 = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y_kontinentalna(d.svinje_kontinentalna); });
var valueline_goveda2 = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y_kontinentalna(d.goveda_kontinentalna); });
var valueline_ovce2 = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y_kontinentalna(d.ovce_kontinentalna); });


var svg2 = d3.select("#linediv").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.attr("id", "svg_kontinent")
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var div = d3.select("body").append("div")
	.attr("class", "tooltip")
	.style("opacity", 0);

	x.domain([data[0].godina, data[data.length - 1].godina]);
	y_kontinentalna.domain([d3.min(data, function(d) { return Math.min( d.perad_kontinentalna, d.koze_kontinentalna, d.svinje_kontinentalna, d.goveda_kontinentalna, d.ovce_kontinentalna); }), d3.max(data, function(d) { return Math.max( d.perad_kontinentalna, d.koze_kontinentalna, d.svinje_kontinentalna, d.goveda_kontinentalna, d.ovce_kontinentalna); })*1.1]);

	svg2.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "10px")
			.attr("dy", "12px");

	svg2.append("text")
		.attr("x", width / 2)
		.attr("y", height + margin.bottom)
		.style("text-anchor", "middle")		
		.style("fill", "#999") 	
		.text("Godine");

	svg2.append("g")
		.attr("class", "y axis2")
		.call(yAxis2);

	svg2.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 0 + (-margin.left))
		.attr("x",0 - (height / 2))
		.attr("dy", "12px")
		.style("text-anchor", "middle")
		.style("fill", "#999") 	
		.text("Količina");

	svg2.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "15px") 
		.style("font-weight", "bold") 
		.style("fill", "#666") 		
        .text("Kontinentalna RH");

	svg2.append("g")
		.attr("id", "gridx")
		.attr("class", "grid")
		.attr("transform", "translate(0," + height + ")")
		.call(make_x_axis()
			.tickSize(-height, 0, 0)
			.tickFormat("")
		);
	svg2.append("g")
		.attr("id", "gridy2")
		.attr("class", "grid")
		.call(make_y_axis2()
			.tickSize(-width, 0, 0)
			.tickFormat("")
		);

    var perad2 = svg2.append('g').classed('perad', true);
    var koze2 = svg2.append('g').classed('koze', true);
    var svinje2 = svg2.append('g').classed('svinje', true);
    var goveda2 = svg2.append('g').classed('goveda', true);
    var ovce2 = svg2.append('g').classed('ovce', true);



	perad2.append("path")
		.datum(data)
		.attr("id", "area_perad2")
		.attr("class", "area");	
	perad2.append("path")
		.attr("d", valueline_perad2(data))
		.style("stroke", colors[1])
		.attr("id", "line_perad2")
		.style("stroke-width", "4px")
		.style("opacity", .7);

	koze2.append("path")
		.datum(data)
		.attr("id", "area_koze2")
		.attr("class", "area");
	koze2.append("path")
		.attr("d", valueline_koze2(data))		
		.style("stroke", colors[2])
		.attr("id", "line_koze2")
		.style("stroke-width", "4px")
		.style("opacity", .7);

	svinje2.append("path")
		.datum(data)		
		.attr("id", "area_svinje2")
		.attr("class", "area");
	svinje2.append("path")
		.attr("d", valueline_svinje2(data))
		.style("stroke", colors[3])
		.attr("id", "line_svinje2")
		.style("stroke-width", "4px")
		.style("opacity", .7);

	goveda2.append("path")
		.datum(data)
		.attr("id", "area_goveda2")
		.attr("class", "area");
	goveda2.append("path")
		.attr("d", valueline_goveda2(data))
		.style("stroke", colors[4])
		.attr("id", "line_goveda2")
		.style("stroke-width", "4px")
		.style("opacity", .7);

	ovce2.append("path")
		.datum(data)
		.attr("id", "area_ovce2")
		.attr("class", "area");
	ovce2.append("path")
		.attr("d", valueline_ovce2(data))
		.style("stroke", colors[5])		
		.attr("id", "line_ovce2")
		.style("stroke-width", "4px")
		.style("opacity", .7);
	
	var circle_perad2 = perad2.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y_kontinentalna(d.perad_kontinentalna); })
			.style("fill", colors[0])
			.style("stroke", colors[1])
			.style("stroke-width", "3px")
			.style("opacity", .7)
			.on("mouseover", function(d) {
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Perad | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.perad_kontinentalna) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});
	
	var circle_koze2 = koze2.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y_kontinentalna(d.koze_kontinentalna); })
			.attr("class", "tooltips")
			.style("fill", colors[0])
			.style("stroke", colors[2])
			.style("stroke-width", "3px")
			.style("opacity", .7)
			.on("mouseover", function(d) {
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Koze | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.koze_kontinentalna) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});

	var circle_svinje2 = svinje2.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y_kontinentalna(d.svinje_kontinentalna); })
			.style("fill", colors[0])
			.style("stroke", colors[3])
			.style("stroke-width", "3px")
			.style("opacity", .8)
			.on("mouseover", function(d) {
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Svinje | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.svinje_kontinentalna) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});

	var circle_goveda2 = goveda2.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y_kontinentalna(d.goveda_kontinentalna); })
			.attr("class", "tooltips")
			.style("fill", colors[0])
			.style("stroke", colors[4])
			.style("stroke-width", "3px")
			.style("opacity", .8)
			.on("mouseover", function(d) {
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Goveda | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.goveda_kontinentalna) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});

	var circle_ovce2 = ovce2.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y_kontinentalna(d.ovce_kontinentalna); })
			.attr("class", "tooltips")
			.style("fill", colors[0])
			.style("stroke", colors[5])
			.style("stroke-width", "3px")
			.style("opacity", .8)
			.on("mouseover", function(d) {
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Ovce | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.ovce_kontinentalna) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});





/////////////////////////////////////
//////T R E C I /////////////////////
////////////////////////////////////

var area_perad3 = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y_jadranska(d.perad_jadranska); });

var area_koze3 = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y_jadranska(d.koze_jadranska); });

var area_svinje3 = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y_jadranska(d.svinje_jadranska); });

var area_goveda3 = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y_jadranska(d.svinje_jadranska); });

var area_ovce3 = d3.svg.area()
	.interpolate("linear") 
	.x(function(d) { return x(d.godina); })
	.y0(height) 
	.y1(function(d) { return y_jadranska(d.svinje_jadranska); });

var valueline_perad3 = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y_jadranska(d.perad_jadranska); });
var valueline_koze3 = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y_jadranska(d.koze_jadranska); });
var valueline_svinje3 = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y_jadranska(d.svinje_jadranska); });
var valueline_goveda3 = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y_jadranska(d.goveda_jadranska); });
var valueline_ovce3 = d3.svg.line()
	.x(function(d) { return x(d.godina); })
	.y(function(d) { return y_jadranska(d.ovce_jadranska); });


var svg3 = d3.select("#linediv").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.attr("id", "svg_jadran")
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var div = d3.select("body").append("div")
	.attr("class", "tooltip")
	.style("opacity", 0);

	x.domain([data[0].godina, data[data.length - 1].godina]);
	y_jadranska.domain([d3.min(data, function(d) { return Math.min( d.perad_jadranska, d.koze_jadranska, d.svinje_jadranska, d.goveda_jadranska, d.ovce_jadranska); }), d3.max(data, function(d) { return Math.max( d.perad_jadranska, d.koze_jadranska, d.svinje_jadranska, d.goveda_jadranska, d.ovce_jadranska); })*1.1]);

	svg3.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "10px")
			.attr("dy", "13px");

	svg3.append("text")
		.attr("x", width / 2)
		.attr("y", height + margin.bottom)
		.style("text-anchor", "middle")
		.style("fill", "#999")
		.text("Godine");

	svg3.append("g")
		.attr("class", "y axis3")
		.call(yAxis3);

	svg3.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 0 + (-margin.left))
		.attr("x",0 - (height / 2))
		.attr("dy", "13px")
		.style("text-anchor", "middle")
		.style("fill", "#999")
		.text("Količina");
	
	svg3.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "15px") 
		.style("font-weight", "bold") 
		.style("fill", "#666") 		
        .text("Jadranska RH");

	svg3.append("g")
		.attr("id", "gridx")
		.attr("class", "grid")
		.attr("transform", "translate(0," + height + ")")
		.call(make_x_axis()
			.tickSize(-height, 0, 0)
			.tickFormat("")
		);
	svg3.append("g")
		.attr("id", "gridy3")
		.attr("class", "grid")
		.call(make_y_axis3()
			.tickSize(-width, 0, 0)
			.tickFormat("")
		);

    var perad3 = svg3.append('g').classed('perad', true);
    var koze3 = svg3.append('g').classed('koze', true);
    var svinje3 = svg3.append('g').classed('svinje', true);
    var goveda3 = svg3.append('g').classed('goveda', true);
    var ovce3 = svg3.append('g').classed('ovce', true);

	perad3.append("path")
		.datum(data)
		.attr("id", "area_perad3")
		.attr("class", "area");	
	perad3.append("path")
		.attr("d", valueline_perad3(data))
		.style("stroke", colors[1])
		.attr("id", "line_perad3")
		.style("stroke-width", "4px")
		.style("opacity", .7);

	koze3.append("path")
		.datum(data)
		.attr("id", "area_koze3")
		.attr("class", "area");
	koze3.append("path")
		.attr("d", valueline_koze3(data))		
		.style("stroke", colors[2])
		.attr("id", "line_koze3")
		.style("stroke-width", "4px")
		.style("opacity", .7);

	svinje3.append("path")
		.datum(data)
		.attr("id", "area_svinje3")
		.attr("class", "area");
	svinje3.append("path")
		.attr("d", valueline_svinje3(data))
		.style("stroke", colors[3])
		.attr("id", "line_svinje3")
		.style("stroke-width", "4px")
		.style("opacity", .7);

	goveda3.append("path")
		.datum(data)
		.attr("id", "area_goveda3")
		.attr("class", "area");
	goveda3.append("path")
		.attr("d", valueline_goveda3(data))
		.style("stroke", colors[4])
		.attr("id", "line_goveda3")
		.style("stroke-width", "4px")
		.style("opacity", .7);

	ovce3.append("path")
		.datum(data)
		.attr("id", "area_ovce3")
		.attr("class", "area");
	ovce3.append("path")
		.attr("d", valueline_ovce3(data))
		.style("stroke", colors[5])
		.attr("id", "line_ovce3")
		.style("stroke-width", "4px")
		.style("opacity", .7);
	
	var circle_perad3 = perad3.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y_jadranska(d.perad_jadranska); })
			.style("fill", colors[0])
			.style("stroke", colors[1])
			.style("stroke-width", "3px")
			.style("opacity", .7)
			.on("mouseover", function(d) {
				div.transition()
					.duration(300)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Perad | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.perad_jadranska) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});
	
	var circle_koze3 = koze3.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y_jadranska(d.koze_jadranska); })
			.attr("class", "tooltips")
			.style("fill", colors[0])
			.style("stroke", colors[2])
			.style("stroke-width", "3px")
			.style("opacity", .7)
			.on("mouseover", function(d) {
				div.transition()
					.duration(300)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Koze | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.koze_jadranska) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});

	var circle_svinje3 = svinje3.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y_jadranska(d.svinje_jadranska); })
			.style("fill", colors[0])
			.style("stroke", colors[3])
			.style("stroke-width", "3px")
			.style("opacity", .8)
			.on("mouseover", function(d) {
				div.transition()
					.duration(300)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Svinje | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.svinje_jadranska) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});

	var circle_goveda3 = goveda3.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y_jadranska(d.goveda_jadranska); })
			.attr("class", "tooltips")
			.style("fill", colors[0])
			.style("stroke", colors[4])
			.style("stroke-width", "3px")
			.style("opacity", .8)
			.on("mouseover", function(d) {
				div.transition()
					.duration(300)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Goveda | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.goveda_jadranska) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});

	var circle_ovce3 = ovce3.selectAll("dot")
		.data(data)
		.enter().append("circle")
			.attr("r", 4)
			.attr("cx", function(d) { return x(d.godina); })
			.attr("cy", function(d) { return y_jadranska(d.ovce_jadranska); })
			.attr("class", "tooltips")
			.style("fill", colors[0])
			.style("stroke", colors[5])
			.style("stroke-width", "3px")
			.style("opacity", .8)
			.on("mouseover", function(d) {
				div.transition()
					.duration(300)
					.style("opacity", .9);
				div.html("<span class='tooltip_godina'>Ovce | " + (d.godina) + ".</span>"  + "<br/>" + "<span class='tooltip_broj'>" + format(d.ovce_jadranska) + "</span>")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {
				div.transition()
					.duration(400)
					.style("opacity", 0);
			});





d3.selectAll('.stoka_checkbox').on('click', function () {
    var value = this.value,
        checked = this.checked;
    d3.selectAll('.' + value).classed('hidden', !checked);
	d3.selectAll('.' + value+'2').classed('hidden', !checked);
	d3.selectAll('.' + value+'3').classed('hidden', !checked);
	 
});

d3.select("body").selectAll("input")
	.attr("type", "checkbox")
	.attr("onClick", "update()");	




 update = function () {
    
    if($("#idperad").is(':checked')){		
		y.domain([0, d3.max(data, function(d) { return Math.max( d.perad_ukupno); })*1.1]);
		y_kontinentalna.domain([0, d3.max(data, function(d) { return Math.max( d.perad_kontinentalna); })*1.1]);
		
	}else{
		if($("#idsvinje").is(':checked')){
			y.domain([0, d3.max(data, function(d) { return Math.max( d.svinje_ukupno); })*1.1]);
			y_kontinentalna.domain([0, d3.max(data, function(d) { return Math.max( d.svinje_kontinentalna); })*1.1]);
		}else{
			if($("#idovce").is(':checked')){
				y.domain([0, d3.max(data, function(d) { return Math.max( d.ovce_ukupno); })*1.1]);
				y_kontinentalna.domain([0, d3.max(data, function(d) { return Math.max( d.goveda_kontinentalna, d.ovce_kontinentalna); })*1.1]);
			}else{
				if($("#idgoveda").is(':checked')){
					y.domain([0, d3.max(data, function(d) { return Math.max( d.goveda_ukupno); })*1.1]);
					y_kontinentalna.domain([0, d3.max(data, function(d) { return Math.max( d.goveda_kontinentalna, d.ovce_kontinentalna); })*1.1]);
				}else{
					y.domain([0, d3.max(data, function(d) { return Math.max( d.koze_ukupno); })*1.2]);
					y_kontinentalna.domain([0, d3.max(data, function(d) { return Math.max( d.koze_kontinentalna); })*1.1]);
				}
			}
		}
	}

	if($("#idperad").is(':checked')){		
		y_jadranska.domain([0, d3.max(data, function(d) { return Math.max( d.perad_jadranska); })*1.1]);
	}else{
		if($("#idovce").is(':checked')){
			y_jadranska.domain([0, d3.max(data, function(d) { return Math.max(d.ovce_jadranska); })*1.1]);
		}else{
			if($("#idsvinje").is(':checked')){
				y_jadranska.domain([0, d3.max(data, function(d) { return Math.max( d.svinje_jadranska); })*1.1]);
			}else{
				if($("#idkoze").is(':checked')){
					y_jadranska.domain([0, d3.max(data, function(d) { return Math.max( d.koze_jadranska); })*1.1]);
				}else{
					y_jadranska.domain([0, d3.max(data, function(d) { return Math.max( d.goveda_jadranska); })*1.1]);
				}
			}
		}
	}
    
   
    var svg = d3.select("body").transition();
    
    svg.select(".y.axis")
		.duration(750)
		.call(yAxis);
    svg.select("#gridy")
		.duration(750)
		.call(make_y_axis()
			.tickSize(-width, 0, 0)
			.tickFormat(""));

    svg.select("#area_perad")
		.duration(750)
		.attr("d", area_perad(data));
    svg.select("#line_perad")
		.duration(750)
		.attr("d", valueline_perad(data));
	svg.select("#area_koze")
		.duration(750)
		.attr("d", area_koze(data));
    svg.select("#line_koze")
		.duration(750)
		.attr("d", valueline_koze(data));
	svg.select("#area_svinje")
		.duration(750)
		.attr("d", area_svinje(data));
    svg.select("#line_svinje")
		.duration(750)
		.attr("d", valueline_svinje(data));
    svg.select("#area_svinje")
		.duration(750)
		.attr("d", area_goveda(data));
    svg.select("#line_goveda")
		.duration(750)
		.attr("d", valueline_goveda(data));
    svg.select("#area_ovce")
		.duration(750)
		.attr("d", area_ovce(data));
    svg.select("#line_ovce")
		.duration(750)
		.attr("d", valueline_ovce(data));


circle_perad.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y(d.perad_ukupno); });
circle_koze.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y(d.koze_ukupno); });
circle_svinje.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y(d.svinje_ukupno); });
circle_goveda.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y(d.goveda_ukupno); });
circle_ovce.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y(d.ovce_ukupno); });

	
//////////////////////////////////
///////////////drugi update/////////////
/////////////////////////////////
 svg.select(".y.axis2")
    .duration(750)
    .call(yAxis2);
    
svg.select("#gridy2")
    .duration(750)
    .call(make_y_axis2()
          .tickSize(-width, 0, 0)
          .tickFormat("")
         );

    svg.select("#area_perad2")
		.duration(750)
		.attr("d", area_perad2(data));
    svg.select("#line_perad2")
		.duration(750)
		.attr("d", valueline_perad2(data));
	svg.select("#area_koze2")
		.duration(750)
		.attr("d", area_koze2(data));
    svg.select("#line_koze2")
		.duration(750)
		.attr("d", valueline_koze2(data));
	svg.select("#area_svinje2")
		.duration(750)
		.attr("d", area_svinje2(data));
    svg.select("#line_svinje2")
		.duration(750)
		.attr("d", valueline_svinje2(data));
    svg.select("#area_svinje2")
		.duration(750)
		.attr("d", area_goveda2(data));
    svg.select("#line_goveda2")
		.duration(750)
		.attr("d", valueline_goveda2(data));
    svg.select("#area_ovce2")
		.duration(750)
		.attr("d", area_ovce2(data));
    svg.select("#line_ovce2")
		.duration(750)
		.attr("d", valueline_ovce2(data));

circle_perad2.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y_kontinentalna(d.perad_kontinentalna); });
circle_koze2.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y_kontinentalna(d.koze_kontinentalna); });
circle_svinje2.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y_kontinentalna(d.svinje_kontinentalna); });
circle_goveda2.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y_kontinentalna(d.goveda_kontinentalna); });
circle_ovce2.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y_kontinentalna(d.ovce_kontinentalna); });





//////////////////////////////////
///////////////treci update/////////////
/////////////////////////////////

 svg.select(".y.axis3")
    .duration(750)
    .call(yAxis3);
    
svg.select("#gridy3")
    .duration(750)
    .call(make_y_axis3()
          .tickSize(-width, 0, 0)
          .tickFormat("")
         );

    svg.select("#area_perad3")
		.duration(750)
		.attr("d", area_perad3(data));
    svg.select("#line_perad3")
		.duration(750)
		.attr("d", valueline_perad3(data));
	svg.select("#area_koze3")
		.duration(750)
		.attr("d", area_koze3(data));
    svg.select("#line_koze3")
		.duration(750)
		.attr("d", valueline_koze3(data));
	svg.select("#area_svinje3")
		.duration(750)
		.attr("d", area_svinje3(data));
    svg.select("#line_svinje3")
		.duration(750)
		.attr("d", valueline_svinje3(data));
    svg.select("#area_svinje3")
		.duration(750)
		.attr("d", area_goveda3(data));
    svg.select("#line_goveda3")
		.duration(750)
		.attr("d", valueline_goveda3(data));
    svg.select("#area_ovce3")
		.duration(750)
		.attr("d", area_ovce3(data));
    svg.select("#line_ovce3")
		.duration(750)
		.attr("d", valueline_ovce3(data));

circle_perad3.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y_jadranska(d.perad_jadranska); });
circle_koze3.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y_jadranska(d.koze_jadranska); });
circle_svinje3.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y_jadranska(d.svinje_jadranska); });
circle_goveda3.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y_jadranska(d.goveda_jadranska); });
circle_ovce3.data(data)
	.transition()
    .duration(750)
	.attr("cx", function(d) { return x(d.godina); })
	.attr("cy", function(d) { return y_jadranska(d.ovce_jadranska); });



};


});