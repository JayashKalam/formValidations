document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
  
    cheakData();
})

var username = document.getElementById("username");
var email = document.getElementById("email");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");



function cheakData(){
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var pass1Value = pass1.value.trim();
    var pass2Value = pass2.value.trim();
    
    //username
    if(usernameValue==""){
        setError(username);
    }else{
        setSuccess(username);
    }

    //email
    if(emailValue==""){
        setError(email);
    }
    else if(!valid(emailValue)){
        setError(email);
    }
    else{
        setSuccess(email);
    }

    //password
    if(pass1Value==""){
        setError(pass1);
    }else{
        setSuccess(pass1);
    }

    //comform password
    if(pass2Value==""){
        setError(pass2);
    }else if(pass1Value!==pass2Value){
        setError(pass2)

    }
    else{
        setSuccess(pass2);
    }

 }

 function setError(u){
    var parentBox = u.parentElement;
    parentBox.className = "input-field error";
    
 }
 function setSuccess(u){
    var parentBox = u.parentElement;
    parentBox.className = "input-field success";

 }

 function valid(e){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(e);
 }
 
