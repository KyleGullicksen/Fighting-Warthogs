//Expects an array of objects
function bargraph(data) {
    var margin = {top: 20, right: 20, bottom: 70, left: 40},
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

// set the ranges
    var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

    var y = d3.scale.linear().range([height, 0]);

// define the axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")


    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);


// add the SVG element
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

        // scale the range of the data
        x.domain(data.map(function(d) { return d.X; }));
        y.domain([0, d3.max(data, function(d) { return d.Y; })]);

        // add axis
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-90)" );

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 5)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Yuency");


        // Add bar chart
        svg.selectAll("bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.X); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.Y); })
            .attr("height", function(d) { return height - y(d.Y); });
}

var data = [
    {
        "X": "A",
        "Y": 20
    },
    {
        "X" : "B",
        "Y": 12
    },
    {
        "X" : "C",
        "Y": 47
    },
    {
        "X" : "D",
        "Y": 34
    },
    {
        "X" : "E",
        "Y" : 54
    },
    {
        "X" : "F",
        "Y" : 21
    },
    {
        "X" : "G",
        "Y" : 57
    },
    {
        "X" : "H",
        "Y" : 31
    },
    {
        "X" : "I",
        "Y" : 17
    },
    {
        "X" : "J",
        "Y" : 5
    },
    {
        "X" : "K",
        "Y" : 23
    },
    {
        "X" : "L",
        "Y" : 39
    },
    {
        "X" : "M",
        "Y" : 29
    },
    {
        "X" : "N",
        "Y" : 33
    },
    {
        "X" : "O",
        "Y" : 18
    },
    {
        "X" : "P",
        "Y" : 35
    },
    {
        "X" : "Q",
        "Y" : 11
    },
    {
        "X" : "R",
        "Y" : 45
    },
    {
        "X" : "S",
        "Y" : 43
    },
    {
        "X" : "T",
        "Y" : 28
    },
    {
        "X" : "U",
        "Y" : 26
    },
    {
        "X" : "V",
        "Y" : 30
    },
    {
        "X" : "X",
        "Y" : 5
    },
    {
        "X" : "Y",
        "Y" : 4
    },
    {
        "X" : "Z",
        "Y" : 2
    }
];

bargraph(data);

