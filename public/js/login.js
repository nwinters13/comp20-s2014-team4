function onLogin(){

var newUser = true
var msg = document.getElementById("email").value;
if(msg == localStorage['CEemail']){
    newUser = false;
}
else {
    localStorage['CEemail'] = msg;
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('TnrrHAw7RE87k-8ejmpQ0A');

// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"CostEaterTeam@gmail.com",
        "to":[{"email": msg}],
        "subject": "Thanks from the Cost Eater Team",
        "text": "We here at the Cost Eater Headquarters would like to thank you for taking the time to enjoy what Cost Eater has to offer!"
    }
};

if(newUser == true){
    sendTheMail(m, params);
}

}






function sendTheMail(m, params) {
// Send the email!

    m.messages.send(params, function(res) {
        console.log(res);
    }, function(err) {
        console.log(err);
    });
}