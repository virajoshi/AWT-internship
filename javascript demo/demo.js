function demoExternalAlert(){
    alert("Interal Alert.");
}
function demoExternalConfirm(){
    if(confirm('Are you sure..??')){
        alert('okay,done.');
    }
    else{
        alert('check the error..')
    }
}
function demoExternalPrompt(){
    var uname=prompt('Enter the username here..');
    var pname=prompt('Enetr the password..');
    alert(uname+" "+pname);
}