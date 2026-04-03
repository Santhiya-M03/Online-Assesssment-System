function register() {

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let role = document.getElementById("role").value; // 🔥 NEW
    if (username === "" || email === "" || password === "" || role === "") {
        alert("Please fill all fields");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let exists = users.find(u => u.email === email);
    if (exists) {
        alert("User already registered!");
        return;
    }
    let user = {
        username: username,
        email: email,
        password: password,
        role: role
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration Successful");
    window.location.href = "login.html";
}