
function SEND(){
var name=document.getElementById('input_name').value
var email=document.getElementById('input_email').value
var subject=document.getElementById('input_subject').value
var message=document.getElementById('input_message').value
console.log(name)
console.log(email)
console.log(subject)
console.log(message)

var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://portfolio-mailing-api.herokuapp.com/',true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    "name": name,
    "email":email,
    "subject":subject,
    "message":message
}));
alert("Email Sent Successfully");
var frm = document.getElementsByName('Contact_form')[0];
frm.reset();
return false;
}
