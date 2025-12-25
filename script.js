
function valid(){
    let username=document.getElementById("username").value;
    let password =document.getElementById("password").value;
    let email =document.getElementById("email").value;
    let aadhaar=document.getElementById("aadhaar").value;
    let pan =document.getElementById("pan").value;

    if(username.trim() === "" || password.trim() === "" || email.trim() === "" || aadhaar.trim() === ""|| pan.trim()===""){
        alert("invalid details")
        return false;
    }
    else{
        alert("successfully login")
        return true;
    }
}