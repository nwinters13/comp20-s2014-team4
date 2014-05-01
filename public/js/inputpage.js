	var newtrip = {
	date: null,
	items : []};


  var today = new Date();
  var month = today.getMonth()+1;
  var day = today.getDate();
  var year = today.getFullYear();

  dat = {
    month: today.getMonth(),
    day: today.getDate(),
    year: today.getFullYear()
  }
 document.getElementById("dm").value=month;
 document.getElementById("dd").value=day;
 document.getElementById("dy").value=year;

document.getElementById("user").innerHTML = localStorage['CEemail'];

function myCreateFunction()
{
  var table = document.getElementById("myTable");
  {

  var rowLength = table.rows.length;
  var row = table.insertRow(rowLength);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = "Item:<input id='item' value='air' >";
  cell2.innerHTML = "Type:<select><option value='grocery'>Grocery</option><option value='veggies'>Veggies</option><option value='fruit'>Fruit</option><option value='dairy'>Dairy</option><option value='alcohol'>Alcohol</option><option value='meat'>Meat</option><option value='grain'>Grain</option><option value='other'>Other</option></select>";
  cell3.innerHTML = "Price:<input id='price' value='0'>";
  cell4.innerHTML = "Expiration Date:<input size='2' >/<input  size='2'>/<input  size='4' >";

  }
}
function myDeleteFunction()
{
var table = document.getElementById('myTable');
  document.getElementById("myTable").deleteRow(table.rows.length-1);
}

function sendData(){

$(":date").bind("onShow onHide", function()  {
  $(this).parent().toggleClass("active");
  console.log('haha');
});


     // `this` is TR DOM element$(this).find('input').val()
var table = document.getElementById('myTable');

var rowLength = table.rows.length;

for(var i=0; i<rowLength; i+=1){
  var row = table.rows[i];
  var item = {
    name: null,
    type: null,
    price: null,
    expiration: null
  }
  item.name = row.cells[0].firstChild.nextSibling.value;
  item.type = row.cells[1].firstChild.nextSibling.value;
  console.log(item.type);
  item.price = row.cells[2].firstChild.nextSibling.value;
  exp = {}
  exp.month = row.cells[3].firstChild.nextSibling.value;
  exp.day= row.cells[3].firstChild.nextSibling.nextSibling.value;
  exp.year=row.cells[3].firstChild.nextSibling.nextSibling.nextSibling.value;
  console.log(exp);
  item.expiration = exp;

  }

  




  var dat ={
    month: document.getElementById("dm").value-1,
    day: document.getElementById("dd").value,
    year: document.getElementById("dy").value
  }
  newtrip.date = dat;


  var em = localStorage['CEemail'];
  var json = {
    email: em,
    trip: newtrip
  };
  $.post("http://costeater.herokuapp.com/post.json", json );

  home();

}
function home(){
   window.location.href = "http://costeater.herokuapp.com/graphs";

}
