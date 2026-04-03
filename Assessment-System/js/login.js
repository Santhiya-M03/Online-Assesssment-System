function login(){

let username = document.getElementById("username").value.trim();
let password = document.getElementById("password").value.trim();
let errorMsg = document.getElementById("error");


let users = JSON.parse(localStorage.getItem("users")) || [];

if(users.length === 0){
    errorMsg.innerText = "No user found. Please register.";
    return;
}


let user = users.find(u => u.username === username && u.password === password);

if(!user){
    errorMsg.innerText = "❌ Invalid Username or Password";
    return;
}


localStorage.setItem("loggedUser", JSON.stringify(user));


document.getElementById("successModal").style.display = "flex";


setTimeout(()=>{

    if(user.role === "student"){
        window.location.href = "studentdb.html";
    }
    else if(user.role === "teacher"){
        window.location.href = "teacherdb.html";
    }
    else if(user.role === "admin"){
        window.location.href = "admindb.html";
    }
    else{
        errorMsg.innerText = "Role not assigned!";
    }

},2000);

}