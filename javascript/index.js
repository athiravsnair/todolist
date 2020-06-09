
function login(){
    var login=document.getElementsByClassName("form-control");
    if(login[0].value==""){
        alert("Please Enter the Username");
        // window.location.replace("index.html");
        return false;
    }
    else if (login[1].value==""){
        alert("Please Enter the Password");
        // window.location.replace("index.html");
        return false;
    }
    else if (login[0].value=="admin" && login[1].value==12345){
        alert("Welcome to your Account!");
        // window.location.replace("profile.html");
        return true;
        
    }
    else {
        alert("Log In Failed");
        // window.location.replace("index.html");
        return false;
    }
}