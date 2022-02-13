const parser = new exprEval.Parser()
var rows = []

var trace = {
    x: [],
    y: [],
    mode: 'lines+markers',
    type: 'scatter'
}

function reset() {
    var tbl = document.getElementById("sol-table")
    while(rows.length) {
        tbl.removeChild(rows.pop())
    }
}

function solve() {
    reset()
    var dydx = document.getElementById("exp").value
    var x0 = Number(document.getElementById("x0").value)
    var x1 = Number(document.getElementById("x1").value)
    var y0 = Number(document.getElementById("y0").value)
    var dx = Number(document.getElementById("dx").value)
    var tbl = document.getElementById("sol-table")
    let expr = parser.parse(dydx)
    var xs = [], ys = [y0]
    var i = 0
    while (x0 < x1 + dx) {
        var row = document.createElement("tr")
        var c1 = document.createElement("td")
        c1.appendChild(document.createTextNode(i))
        row.appendChild(c1)
        var c2 = document.createElement("td")
        c2.appendChild(document.createTextNode(x0))
        row.appendChild(c2)
        var c3 = document.createElement("td")
        c3.appendChild(document.createTextNode(ys[ys.length - 1]))
        row.appendChild(c3)
        rows.push(row)
        tbl.appendChild(row)

        xs.push(x0)
        ys.push(ys[ys.length - 1] + dx * expr.evaluate({x: x0, y: ys[ys.length - 1]}))
        x0 += dx
        i++
    }
    console.log(xs)
    console.log(ys)
    ys.pop()
    trace.x = xs
    trace.y = ys
    var data = [trace]
    Plotly.newPlot("graph", data)
};

function main() {
    var data = [trace]
    Plotly.newPlot("graph", data)
};