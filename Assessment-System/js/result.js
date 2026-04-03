

let score = parseInt(localStorage.getItem("score")) || 0;
let total = parseInt(localStorage.getItem("total")) || 0;
let quizType = localStorage.getItem("quizType");

let percentage = total > 0 ? Math.round((score / total) * 100) : 0;

if (quizType) {
    let title = quizType.replaceAll("_", " ").toUpperCase();
    document.getElementById("quizTitle").innerHTML =
        "🏆 " + title + " Result";
}

document.getElementById("score").innerHTML =
    "Your Score: " + score + " / " + total;

if (document.getElementById("percentage")) {
    document.getElementById("percentage").innerHTML =
        "Percentage: " + percentage + "%";
}

document.getElementById("retryBtn").onclick = () => {
    window.location.href = "quiz.html";
};

document.getElementById("dashboardBtn").onclick = () => {
    window.location.href = "teacherdb.html";
};

let message = document.getElementById("message");

if (percentage >= 90) {
    message.innerHTML = "🌟 Excellent! Placement Ready!";
    message.style.color = "green";
}
else if (percentage >= 70) {
    message.innerHTML = "👍 Good Job! Keep Practicing.";
    message.style.color = "green";
}
else if (percentage >= 50) {
    message.innerHTML = "🙂 Average Performance.";
    message.style.color = "orange";
}
else {
    message.innerHTML = "😔 Try Again! Practice More.";
    message.style.color = "red";
}

let user = JSON.parse(localStorage.getItem("loggedUser"));

let reports = JSON.parse(localStorage.getItem("reports")) || [];

reports.push({
    name: user.username,
    score: score,
    total: total,
    percentage: percentage

});

localStorage.setItem(
    "reports",
    JSON.stringify(reports)
);

