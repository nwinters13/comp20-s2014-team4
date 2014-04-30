// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(getData());

var dairy = 0;
var veggies = 0;
var fruit = 0;
var grocery = 0;
var alcohol = 0;
var meat = 0;
var grain = 0;
var other = 0;

var dairyP = 0;
var veggiesP = 0;
var fruitP = 0;
var groceryP = 0;
var alcoholP = 0;
var meatP = 0;
var grainP = 0;
var otherP = 0;

var dairyS = "";
var veggiesS = "";
var fruitS = "";
var groceryS = "";
var alcoholS = "";
var meatS = "";
var grainS = "";
var otherS = "";

var trips = [];
var expiringItems = [];
var expirationDays = []; 

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function checkExpiration(item) {
	if (item.expiration > Date()) {
		var expItem = {
			name: item.name,
			date: item.expiration
		}
		expiringItems.push(expItem);
	}
}

function loadData() {
	// Get the user's email which has been stored in localStorage[]
	var user = localStorage['CEemail'];
	
	// jQuery get function to grab all the data from our DB
	$.get("heroku url here", { email: user })
		.done(function(data) {
			// Parse the JSON into a trips object
			var userObj = JSON.parse(data);
			
			// Gather all of the necessary data for our charts
			for (var trip in userObj['trips']) {
				var date = trip.date;
				for (var item in trip['items']) {
					if (item.type == "Dairy") {
						checkExpiration(item);
						dairy++;
						dairyP += item.price;
						totalP += item.price;
						dairyS += (item.name + " ");
					}
					if (item.type == "Veggies") {
						checkExpiration(item);
						veggies++;
						vegetablesP += item.price;
						totalP += item.price;
						veggiesS += (item.name + " ");
					}
					if (item.type == "Fruit") {
						checkExpiration(item);
						fruit++;
						fruitP += item.price;
						totalP += item.price;
						fruitS += (item.name + " ");
					}
					if (item.type == "Grocery") {
						checkExpiration(item);
						grocery++;
						groceryP += item.price;
						totalP += item.price;
						groceryS += (item.name + " ");
					}
					if (item.type == "Alcohol") {
						checkExpiration(item);
						alcohol++;
						alcoholP += item.price;
						totalP += item.price;
						alcoholS += (item.name + " ";
					}	
					if (item.type == "Meat") {
						checkExpiration(item);
						meat++;
						meatP += item.price;
						totalP += item.price;
						meatS += (item.name + " ");
					}
					if (item.type == "Grain") {
						checkExpiration(item);
						grain++;
						grainP += item.price;
						totalP += item.price;
						grainS += (item.name + " ");
					}
					if (item.type == "Other") {
						checkExpiration(item);
						other++;
						dairyP += item.price;
						totalP += item.price;
						otherS += (item.name + " ");
					}
				}
				
				// If any values are null, no point is drawn for them. This is good!!
				var trip = {
					dairy: dairy, 
					meat: meat, 
					veggies: veggies,
					fruit: fruit,
					grocery: grocery,
					alcohol: alcohol,
					grain: grain,
					other: other,
					dairyP: dairyP, 
					meatP: meatP, 
					veggiesP: veggiesP,
					fruitP: fruitP,
					groceryP: groceryP,
					alcoholP: alcoholP,
					grainP: grainP,
					otherP: otherP,
					dairyS: dairyS, 
					meatS: meatS, 
					veggiesS: veggiesS,
					fruitS: fruitS,
					groceryS: groceryS,
					alcoholS: alcoholS,
					grainS: grainS,
					otherS: otherS,
					totalP: totalP, 
					date: date
				};
				// Add to an array of trips and an array of expiration items
				trips.push(trip);
				expirationDays.push(expiringItems);
			}
			
			// Draw the charts (originally occurred onload, now we load data first)
			drawPieChart(trips);
			drawLineGraph(trips);
			
	});
}

function drawPieChart(trips) {

	// Create the data table.
	var data = new google.visualization.DataTable();

	data.addColumn('string', 'Type');
	data.addColumn('number', 'Items');
	
	for (var trip in trips) {
		data.addRows([
			['Dairy', trip.dairy],
			['Greens', trip.greens],
			['Grocery', trip.grocery],
			['Meat', trip.meat],
			['Grain', trip.grain],
			['Alcohol', trip.alcohol],
			['Other', trip.other]
		]);
	}


	// Set chart options
	var options = {'title':'What are you buying?',
				   'is3D':true,
				   'width':600,
				   'height':500};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
	chart.draw(data, options);
}

function drawLineGraph(trips) {

	// Create the data table
	var data = new google.visualization.DataTable();
	
	data.addColumn('date', 'Date');
	data.addColumn('number', 'Dairy');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');
	data.addColumn('number', 'Meat');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');
	data.addColumn('number', 'Veggies');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');
	data.addColumn('number', 'Fruit');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');
	data.addColumn('number', 'Grain');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');
	data.addColumn('number', 'Grocery');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');
    data.addColumn('number', 'Alcohol');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');
    data.addColumn('number', 'Other');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');	

  	// Add a row for each trip to the data table
	for (var trip in trips) {
		data.addRows([
			[trip.date, dairyP, 'Dairy', dairyS, meatP, 'Meat', meatS, veggiesP, 'Veggies', veggiesS, fruitP, 'Fruit', fruitS, grainP, 'Grain', grainS, groceryP, 'Grocery', groceryS, alcoholP, 'Alcohol', alcoholS, otherP, 'Other', otherS]
		]);
	}
	
	// Instantiate and draw or chart, passing in some options.
	var annotatedtimeline = new google.visualization.AnnotatedTimeLine(document.getElementById('annotated_timeline'));
	annotatedtimeline.draw(data, {'displayAnnotations': true});
}
​