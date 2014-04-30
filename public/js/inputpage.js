
	var trip = {
	date: null,
	items : []}
function myCreateFunction()
{
var table = document.getElementById("myTable");
  {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = "Item:<input id='item' >";
  cell2.innerHTML = "Type:<input id='type' >";
  cell3.innerHTML = "Price:<input id='price'>";
  cell4.innerHTML = "Days:<input id='days'>";

  }
}
function myDeleteFunction(index)
{

document.getElementById("myTable").deleteRow(index);
}

function sendData(){
	$('#myTable tr').each(function() {
    console.log($(this).find('input').val()); // `this` is TR DOM element
});
}