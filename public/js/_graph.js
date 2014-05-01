// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart', 'table', 'annotatedtimeline']});

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


document.getElementById('user').innerHTML="<a href='http://costeater.herokuapp.com/input.html' l='prev'> Add a New Trip ("  + localStorage["CEemail"]+")";

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function loadData() {
	// Get the user's email which has been stored in localStorage[]
	var user = localStorage['CEemail'];
	// console.log("called loadData() with user: " + user);
	// jQuery get function to grab all the data from our DB
	var url = "http://costeater.herokuapp.com/user.json?email=" + user;
	$.get(url, function (data){
	//$.get("http://costeater.herokuapp.com/user.json?email=sal@boners.edu", function (data){
			// Gather all of the necessary data for our charts
				for (var tripInt in data[0].trips) {	
					var date = new Date(data[0].trips[tripInt].date.year, data[0].trips[tripInt].date.month, data[0].trips[tripInt].date.day);
					for (var itemInt in data[0].trips[tripInt].items) {
						var item = data[0].trips[tripInt].items[itemInt];
						if (item.type == "dairy") {
							dairy++;
							dairyP += item.price;
							totalP += item.price;
							dairyS += (item.name + " ");
						}
						if (item.type == "veggies") {
							veggies++;
							veggiesP += item.price;
							totalP += item.price;
							veggiesS += (item.name + " ");
						}
						if (item.type == "fruit") {
							fruit++;
							fruitP += item.price;
							totalP += item.price;
							fruitS += (item.name + " ");
						}
						if (item.type == "grocery") {
							grocery++;
							groceryP += item.price;
							totalP += item.price;
							groceryS += (item.name + " ");
						}
						if (item.type == "alcohol") {
							alcohol++;
							alcoholP += item.price;
							totalP += item.price;
							alcoholS += (item.name + " ");
						}	
						if (item.type == "meat") {
							meat++;
							meatP += item.price;
							totalP += item.price;
							meatS += (item.name + " ");
						}
						if (item.type == "grain") {
							grain++;
							grainP += item.price;
							totalP += item.price;
							grainS += (item.name + " ");
						}
						if (item.type == "other") {
							other++;
							otherP += item.price;
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
			}
			
			// Draw the charts (originally occurred onload, now we load data first)

			drawLineGraph(trips);
			drawPieChart(trips);
	});
}

function drawPieChart(trips) {

	// Create the data table.

	var data = new google.visualization.DataTable();

	data.addColumn('string', 'Type');
	data.addColumn('number', 'Items');
	
	var dairyT = 0;
	var veggiesT = 0;
	var fruitT = 0;
	var groceryT = 0;
	var alcoholT = 0;
	var meatT = 0;
	var grainT = 0;
	var otherT = 0;

	for (var trip in trips) {
		dairyT += trips[trip].dairy;
		veggiesT += trips[trip].veggies;
		fruitT += trips[trip].fruit;
		groceryT += trips[trip].grocery;
		meatT += trips[trip].meat;
		grainT += trips[trip].grain;
		alcoholT += trips[trip].alcohol;
		otherT += trips[trip].other;
	}
	
	data.addRows([
		['Dairy', dairyT],
		['Veggies', veggiesT],
		['Fruit', fruitT],
		['Grocery', groceryT],
		['Meat', meatT],
		['Grain', grainT],
		['Alcohol', alcoholT],
		['Other', otherT]
	]);



	// Set chart options
	var options = {'title':'What are you buying?',
				   'is3D':true
				   };


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
    data.addColumn('number', 'Total');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');	

  	// Add a row for each trip to the data table
	for (var trip in trips) {
		data.addRows([
			[trips[trip].date, trips[trip].dairyP, 'Dairy', trips[trip].dairyS, trips[trip].meatP, 'Meat', trips[trip].meatS, trips[trip].veggiesP, 'Veggies', trips[trip].veggiesS, trips[trip].fruitP, 'Fruit', trips[trip].fruitS, trips[trip].grainP, 'Grain', trips[trip].grainS, trips[trip].groceryP, 'Grocery', trips[trip].groceryS, trips[trip].alcoholP, 'Alcohol', trips[trip].alcoholS, trips[trip].otherP, 'Other', trips[trip].otherS, trips[trip].totalP, 'Total', trips[trip].totalS]
		]);
	}
	
	// Instantiate and draw our chart, passing in some options.
	var annotatedtimeline = new google.visualization.AnnotatedTimeLine(document.getElementById('annotated_timeline'));
	annotatedtimeline.draw(data, {'displayAnnotations': false, 'fill': 25, 'allowRedraw': true, 'thickness': 2});
}
