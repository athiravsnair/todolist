function fetch(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var output="";
            var completed=""
            for(var i=0;i<response.length;i++){
                output = response[i].title;
                completed = response[i].completed;
                var ul = document.getElementById("ul");
                var li = document.createElement('li');
                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.value = 1;
                checkbox.name = "todo[]";
                if (completed==true) checkbox.disabled=true;
                li.appendChild(checkbox);
                li.appendChild(document.createTextNode(output));
                ul.appendChild(li);
                ul.style.paddingTop="50px";
                ul.style.paddingLeft="50px";
            }
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
};

function validate(){
    var checked = 0;
    var check = document.getElementById("ul");
    var chks = check.getElementsByTagName("input");
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            checked++;
        }
    }
    var promise = new Promise(function(resolve,reject){
        if (checked==5) resolve();
        else reject();
    })
    promise.then(function(){
        alert("Congrats. 5 Tasks have been Successfully Completed"); 
        chks.disabled=true;       
    })
    .catch(function(){
        console.log("Please select 5 tasks!");
    })
};