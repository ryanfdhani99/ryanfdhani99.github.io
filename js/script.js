function calculate() {
    // Get the value of the input
    var sideLength = parseFloat(document.getElementById('sideLength').value);

    // Check if the input is a valid number
    if (!isNaN(sideLength) && sideLength > 0) {
        // Calculate the area and perimeter of the square
        var area = sideLength * sideLength;
        var perimeter = 4 * sideLength;

        // Display the results
        document.getElementById('result').innerHTML = "Results: <br>";
        document.getElementById('result').innerHTML += "<br>The Area : <br>A = S x S <br>A = " + sideLength +" x "+sideLength+" <br>A = " + area + " square units <br>";
        "<br>";
        document.getElementById('result').innerHTML += "<br>The Perimeter : <br>P = 4 x S <br>P = 4 x "+sideLength+" <br>P = " + perimeter + " units";

        // Update the size of the displayed square
        var square = document.getElementById('square');
        square.style.width = sideLength + "px";
        square.style.height = sideLength + "px";
        square.style.backgroundColor = "#4CAF50";
        square.style.marginTop = "20px";
    

        // Display the area and perimeter formulas
        document.getElementById('areaFormula').innerHTML = "Area = Side Length * Side Length";
        document.getElementById('perimeterFormula').innerHTML = "Perimeter = 4 * Side Length";
    } else {
        // Display an error message if the input is not valid
        document.getElementById('result').innerHTML = "Please enter a valid positive number for the side length.";

        // Clear the displayed square
        document.getElementById('square').style.width = "0";
        document.getElementById('square').style.height = "0";
        document.getElementById('square').style.marginTop = "0";

        // Clear the formulas
        document.getElementById('areaFormula').innerHTML = "";
        document.getElementById('perimeterFormula').innerHTML = "";
    }
}

function resetCalculator() {
    // Reset input field, result, and displayed square
    document.getElementById('sideLength').value = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('square').style.width = "0";
    document.getElementById('square').style.height = "0";
    document.getElementById('square').style.marginTop = "0";

    // Clear the formulas
    document.getElementById('areaFormula').innerHTML = "";
    document.getElementById('perimeterFormula').innerHTML = "";
}
