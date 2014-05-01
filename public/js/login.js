function onLogin(){

    var newUser = true
    var msg = document.getElementById("email").value;
    if(msg == localStorage['CEemail']){
        newUser = false;
    }
    else {
        localStorage['CEemail'] = msg;
    }
    console.log(localStorage['CEemail']);
    // create a new instance of the Mandrill class with your API key
    var m = new mandrill.Mandrill('TnrrHAw7RE87k-8ejmpQ0A');

    // create a variable for the API call parameters
    var params = {
        "message": {
            "from_email":"Team@CostEater.com",
            "to":[{"email": msg}],
            "subject": "Thanks from the Cost Eater Team",
            "text": "We here at the Cost Eater Headquarters would like to thank you for taking the time to enjoy what Cost Eater has to offer!"
        }
    };
    console.log(localStorage['CEemail']);

    if(newUser == true){
        sendTheMail(m, params);
    }
    else {
        window.location.href = "http://costeater.herokuapp.com/graphs";
    }


}



function sendTheMail(m, params) {
// Send the email!
    console.log(localStorage['CEemail']);

    m.messages.send(params, function(res) {
        window.location.href = "file:///C:/Users/tischlaptoplend/Documents/GitHub/comp20-s2014-team4/public/graphpage.html";
    }, function(err) {
        console.log(err);
    });
}