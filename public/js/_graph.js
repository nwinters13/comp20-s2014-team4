      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawPieChart);


// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function drawPieChart() {

	// Create the data table.
	var data = new google.visualization.DataTable();

	// Create type variables
	var dairy = 0;
	var greens = 0;
	var grocery = 0;
	var alcohol = 0;
	var meat = 0;
	var grain = 0;
	var other = 0;

	// Test Data
	var types = new Array();
	types[0] = "Dairy";
	types[1] = "Greens";
	types[2] = "Grocery";
	types[3] = "Alcohol";
	types[4] = "Meat";
	types[5] = "Grain";
	types[6] = "Other";
	types[7] = "Dairy";
	types[8] = "Greens";
	types[9] = "Grocery";
	types[10] = "Alcohol";
	types[11] = "Meat";
	types[12] = "Grain";
	types[13] = "Other";
	types[14] = "Dairy";
	types[15] = "Greens";
	types[16] = "Grocery";
	types[17] = "Alcohol";
	types[18] = "Meat";
	types[19] = "Grain";
	types[20] = "Dairy";  
	
// 	var user = localStorage['CEemail'];
// 	var types = [];
// 	
// 	$.get("heroku url here", { email: user })
// 		.done(function(data) {
// 			var userObj = JSON.parse(data);
// 			
// 			for (i = 0; i < userObj['trips'].length; i++) {
// 				for (j = 0; j < userObj['trips']['items'].length; j++) {
// 					types.push(userObj['trips']['items'][j].type);
// 				}
// 			}
// 	});
	
	data.addColumn('string', 'Type');
	data.addColumn('number', 'Items');

	for (i = 0; i < types.length; i++) {
		if (types[i] == "Dairy") {
			dairy++;
		}
		if (types[i] == "Greens") {
			greens++;
		}
		if (types[i] == "Grocery") {
			grocery++;
		}
		if (types[i] == "Alcohol") {
			alcohol++;
		}	
		if (types[i] == "Meat") {
			meat++;
		}
		if (types[i] == "Grain") {
			grain++;
		}
		if (types[i] == "Other") {
			other++;
		}
	}

	data.addRows([
	  ['Dairy', dairy],
	  ['Greens', greens],
	  ['Grocery', grocery],
	  ['Meat', meat],
	  ['Grain', grain],
	  ['Alcohol', alcohol],
	  ['Other', other]
	]);

	// Set chart options
	var options = {'title':'What are you buying?',
				   'is3D':true,
				   'width':400,
				   'height':300};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}

function drawVisualization() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Sold Pencils');
  data.addColumn('string', 'title1');
  data.addColumn('string', 'text1');
  data.addColumn('number', 'Sold Pens');
  data.addColumn('string', 'title2');
  data.addColumn('string', 'text2');
  data.addRows([
    [new Date(2008, 1 ,1), 30000, null, null, 40645, null, null],
    [new Date(2008, 1 ,2), 14045, null, null, 20374, null, null],
    [new Date(2008, 1 ,3), 55022, null, null, 50766, null, null],
    [new Date(2008, 1 ,4), 75284, null, null, 14334, 'Out of Stock', 'Ran out of stock on pens at 4pm'],
    [new Date(2008, 1 ,5), 10000, 'Bought Pens', 'Bought 200k pens', 66467, null, null],
    [new Date(2008, 1 ,6), 33322, null, null, 39463, null, null]
  ]);
  
  var trip1 = [{name:"Eggs", expiration:"new Date(2014, 5, 5),  type:"Dairy", price: 4.69},
      {name:"Milk", expiration:new Date(2014, 5, 6),  type:"Dairy", price: 3.69},
      {name:"Bacon", expiration:new Date(2014, 4, 28),  price: 8.82},
      {name:"Turkey", expiration:new Date(2014, 5, 4),  price: 7.39},
      {name:"Cinnamon Toast Crunch", expiration:new Date(2014, 4, 14),  price: 5.12},
      {name:"Fruit Snacks", expiration:new Date(2014, 5, 12),  price: 23.12}
      {name:"Marshmellows", expiration:new Date(2014, 5, 1),  price: 21.1
      {name:"Broccoli", expiration:new Date(2014, 5, 3),  price: 4.99},
      {name:"Oranges", expiration:new Date(2014, 4, 27),  price: 4.12}];
  
  var trip2 = [{name:"American Cheese", expiration:new Date(2014, 4, 31),  type:"Dairy", price: 4.90},
      {names:"Yogurt", expiration:new Date(2014, 5, 6),  type:"Dairy", price: 5.29},
      {name:"Pork", expiration:new Date(2014, 5, 4),  price: 1.89},
      {name:"Hamburg", expiration:new Date(2014, 5, 5),  price: 4.20},
      {name:"Trash Bags", expiration:new Date(2014, 5, 6),  price: 3.20},
      {name:"Bagel Bites", expiration:new Date(2014, 5, 1),  price: 7.20},
      {name:"Apples", expiration:new Date(2014, 4, 30),  price: 8.20},
      {name:"Bananas", expiration:new Date(2014, 5, 2),  price: 9.20}];
  
  var trip3 = [{name:"Icecream", expiration:new Date(2014, 5, 2),  type:"Dairy", price: 10.90},
      {name:"Cream Cheese", expiration:new Date(2014, 5, 4),  type:"Dairy", price: 12.69},
      {name:"Pepperoni", expiration:new Date(2014, 5, 3),  price: 5.24},
      {name:"Roast Beef", expiration:new Date(2014, 5, 5),  price: 8.50},
      {name:"Hot Dogs", expiration:new Date(2014, 5, 2),  price: 19.80},
      {name:"Mayonaise", expiration:new Date(2014, 5, 4),  price: 7.21},
      {name:"Raspberries", expiration:new Date(2014, 5, 6),  price: 5.43},
      {name:"Cherries", expiration:new Date(2014, 5, 1),  price: 12.50}];
  
  var trip4 = [{name:"Cream", expiration:new Date(2014, 5, 1),  type:"Dairy", price: 6.12},
      {name:"Gogurt", expiration:new Date(2014, 5, 3),  type:"Dairy", price: 16.95},
      {name:"Salami", expiration:new Date(2014, 5, 3),  price: 1.20},
      {name:"Cod", expiration:new Date(2014, 5, 3),  price: 1.20},
      {name:"Haddock", expiration:new Date(2014, 5, 3),  price: 1.20},
      {name:"Cheezits", expiration:new Date(2014, 5, 3),  price: 1.20},
      {name:"Ritz Crackers", expiration:new Date(2014, 5, 3),  price: 1.20},
      {name:"Bananas", expiration:new Date(2014, 5, 3),  price: 1.20},
      {name:"Grapes", expiration:new Date(2014, 5, 3),  price: 1.20},
      {name:"Mango", expiration:new Date(2014, 5, 3),  price: 1.20},
      {name:"Pomagranite", expiration:new Date(2014, 5, 3),  price: 1.20}];
  
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Date');
	data.addColumn('number', 'Dairy');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');
	data.addColumn('number', 'Meat');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');
	data.addColumn('number', 'Grocery');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');
    data.addColumn('number', 'Fruits');
	data.addColumn('string', 'Type');
	data.addColumn('string', 'Items');
	
  	for (i = 0; i < trip1.length; i++) {
  		if (trip1[i].
		data.addRows([
			[new Date(2008, 1 ,1), 30000, null, null, 40645, null, null],
			[new Date(2008, 1 ,2), 14045, null, null, 20374, null, null],
			[new Date(2008, 1 ,3), 55022, null, null, 50766, null, null],
			[new Date(2008, 1 ,4), 75284, null, null, 14334, 'Out of Stock', 'Ran out of stock on pens at 4pm'],
			[new Date(2008, 1 ,5), 10000, 'Bought Pens', 'Bought 200k pens', 66467, null, null],
			[new Date(2008, 1 ,6), 33322, null, null, 39463, null, null]
		]);
  
    
    
    
  }
  
  //for each key in userObj['trips']
  for (var trip in userObject['trips)']) {
    var data = trip.date;
    for (var type in trip['types']) {
    	for (var item in type['items']) {
    		

  
    

  var annotatedtimeline = new google.visualization.AnnotatedTimeLine(
      document.getElementById('visualization'));
  annotatedtimeline.draw(data, {'displayAnnotations': true});
}
​