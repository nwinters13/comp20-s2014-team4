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
myCreateFunction();

document.getElementById('user').innerHTML="Log Out (" + localStorage["CEemail"] +")";
document.getElementById('graphs').innerHTML="Graphs (" + localStorage["CEemail"] +")";
function myCreateFunction()
{
  var table = document.getElementById("myTable");
  {

  var rowLength = table.rows.length;
  var row = table.insertRow(rowLength);
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  cell0.className = 'success';
  cell1.className = 'warning';
  cell2.className = 'info';
  cell3.className = 'danger';
/*value='air'*/
  cell0.innerHTML = "<input id='item' class='text-center' >";
  cell1.innerHTML = "<select><option value='grocery'>(General)</option><option value='veggies'>Veggies</option><option value='fruit'>Fruit</option><option value='dairy'>Dairy</option><option value='alcohol'>Alcohol</option><option value='meat'>Meat</option><option value='grain'>Grain</option><option value='other'>Other</option></select>";
  cell2.innerHTML = "<input id='price' class='text-center' value='0'>";
  var indays = addDays(today,1);
  cell3.innerHTML = "<input size='2' class='text-center' value="+(indays.getMonth()+1)+" > <strong>/</strong> <input  size='2' class='text-center' value="+indays.getDate()+" > <strong>/</strong> <input class='text-center' size='4' value="+indays.getFullYear()+" ><strong> or <strong> <select id='sd' onchange='update(this)'><option value='1'>1 day</option><option value='3'>3 days</option><option value='7'>1 week</option><option value='10'>10 days</option><option value='14'>2 weeks</option><option value='21'>3 weeks</option><option value='30'>1 month</option></select>";

  }
}
function myDeleteFunction()
{
var table = document.getElementById('myTable');

console.log(table.rows.length);
if(table.rows.length>2){
  document.getElementById("myTable").deleteRow(table.rows.length-1);}

}

function sendData(){

$(":date").bind("onShow onHide", function()  {
  $(this).parent().toggleClass("active");
  console.log('haha');
});


     // `this` is TR DOM element$(this).find('input').val()
var table = document.getElementById('myTable');

var rowLength = table.rows.length;

for(var i=1; i<rowLength; i+=1){
  var row = table.rows[i];
  var item = {
    name: null,
    type: null,
    price: null,
    expiration: null
  }
  item.name = row.cells[0].firstChild.value;
  if (item.name === "") {break;}
  item.type = row.cells[1].firstChild.value;
  item.price = row.cells[2].firstChild.value-0;
  if (typeof item.price != 'number' || item.price < 0) {break;
  }
  exp = {}
  exp.month = row.cells[3].firstChild.value-1;
  exp.day= row.cells[3].childNodes[4].value-0;
  exp.year=row.cells[3].childNodes[8].value-0;
  console.log(exp);
  item.expiration = exp;
  newtrip.items.push(item);
}

  
if(newtrip.items.length == 0) return;


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
  alert(JSON.stringify(newtrip));
  $.post("http://costeater.herokuapp.com/post.json", json );

  graphs();

}
function logout(){
   window.location.href = "http://costeater.herokuapp.com/";
}

function graphs(){
   window.location.href = "http://costeater.herokuapp.com/graphs";
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}
function update(sel){
var indays = addDays(today,sel.value-0);
var p =sel.parentNode.parentNode.parentNode;
p.firstChild.value = indays.getMonth()+1;
p.childNodes[4].value = indays.getDate();
p.childNodes[8].value = indays.getFullYear();

}
