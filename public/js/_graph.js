

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart', 'table', 'annotatedtimeline', 'charteditor']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(loadData());

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

var totalP = 0;
var totalItems = 0;
var expiredItems = 0;
var trips = [];
var expiringItems = [];
var expirationTrips = []; 


// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function checkExpiration(item) {
	console.log(item);
	var date = new Date(item.expiration[0], item.expiration[1], item.expiration[2]);
	if (date > Date()) {
		expiredItems++;
	}
}

function loadData() {
	// Get the user's email which has been stored in localStorage[]
	var user = localStorage['CEemail'];
	console.log("called loadData() with user: " + user);
	// jQuery get function to grab all the data from our DB
	//$.get("http://costeater.heroku.com/user.json?email=" + user, function (data){
	$.get("http://costeater.herokuapp.com/user.json?email=sal@boners.edu", function (data){

			// Gather all of the necessary data for our charts
			for (var tripInt in data[0].trips) {	
				var date = new Date(data[0].trips[tripInt].date.year, data[0].trips[tripInt].date.month, data[0].trips[tripInt].date.day);
				for (var itemInt in data[0].trips[tripInt].items) {
					var item = data[0].trips[tripInt].items[itemInt];
					if (item.type == "Dairy") {
						checkExpiration(item);
						dairy++;
						dairyP += item.price;
						totalP += item.price;
						dairyS += (item.name + " ");
						console.log("Houston we have some dairy");
					}
					if (item.type == "veggies") {
						checkExpiration(item);
						veggies++;
						veggiesP += item.price;
						totalP += item.price;
						veggiesS += (item.name + " ");
					}
					if (item.type == "fruit") {
						checkExpiration(item);
						fruit++;
						fruitP += item.price;
						totalP += item.price;
						fruitS += (item.name + " ");
					}
					if (item.type == "grocery") {
						checkExpiration(item);
						grocery++;
						groceryP += item.price;
						totalP += item.price;
						groceryS += (item.name + " ");
					}
					if (item.type == "alcohol") {
						checkExpiration(item);
						alcohol++;
						alcoholP += item.price;
						totalP += item.price;
						alcoholS += (item.name + " ");
					}	
					if (item.type == "meat") {
						checkExpiration(item);
						meat++;
						meatP += item.price;
						totalP += item.price;
						meatS += (item.name + " ");
					}
					if (item.type == "grain") {
						checkExpiration(item);
						grain++;
						grainP += item.price;
						totalP += item.price;
						grainS += (item.name + " ");
					}
					if (item.type == "other") {
						checkExpiration(item);
						other++;
						dairyP += item.price;
						totalP += item.price;
						otherS += (item.name + " ");
					}
					totalItems++;
				}
				
				// If any values are null, no point is drawn for them. This is good!!
				var theTrip = {
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
				trips.push(theTrip);
				console.log(trips);
			}
			
			// Draw the charts (originally occurred onload, now we load data first)
			drawPieChart(trips);
			drawLineGraph(trips);
			drawGauge(totalItems, expiredItems);
	});
}

function drawPieChart(trips) {

	// Create the data table.

	var data = new google.visualization.DataTable();

	data.addColumn('string', 'Type');
	data.addColumn('number', 'Items');
	
	
	for (var trip in trips) {
		console.log(trips[trip]);
		data.addRows([
			['Dairy', trips[trip].dairy],
			['Veggies', trips[trip].veggies],
			['Fruit', trips[trip].fruit],
			['Grocery', trips[trip].grocery],
			['Meat', trips[trip].meat],
			['Grain', trips[trip].grain],
			['Alcohol', trips[trip].alcohol],
			['Other', trips[trip].other]
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
	console.log("dinguscentral");
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
    data.addColumn('number', 'Total');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');	

  	// Add a row for each trip to the data table
	for (var trip in trips) {
		data.addRows([
			[trip.date, trip.dairyP, 'Dairy', trip.dairyS, trip.eatP, 'Meat', trip.meatS, trip.veggiesP, 'Veggies', trip.veggiesS, trip.fruitP, 'Fruit', trip.fruitS, trip.grainP, 'Grain', trip.grainS, trip.groceryP, 'Grocery', trip.groceryS, trip.alcoholP, 'Alcohol', trip.alcoholS, trip.otherP, 'Other', trip.otherS, trip.totalP, 'Total', trip.totalS]
		]);
	}
	
	// Instantiate and draw our chart, passing in some options.
	var annotatedtimeline = new google.visualization.AnnotatedTimeLine(document.getElementById('annotated_timeline'));
	annotatedtimeline.draw(data, {'displayAnnotations': true});
}

function drawGauge(totalItems, expiredItems) {
	// Create and populate the data table.
	var percentExp = (expiredItems/totalItems)*100;
	var data = google.visualization.arrayToDataTable([
		['Label', 'Value'],
		['% Items Expired', percentExp]
	]);

	// Create and draw the visualization.
	new google.visualization.Gauge(document.getElementById('gauge')).draw(data);
}