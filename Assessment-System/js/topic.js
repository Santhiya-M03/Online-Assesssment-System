
let assessment = localStorage.getItem("assessment");
let category = localStorage.getItem("category");
let topicsGrid = document.getElementById("topicsGrid");
let data = {
  assessment1: {
    aptitude: ["Percentage", "ProfitLoss","TimeWork"],
    reasoning: ["BloodRelation", "CodingDecoding","DirectionSense"],
    programming: ["CBasics", "JavaBasics","Python"]
  },
  assessment2: {
    aptitude: ["Average", "Probability","Ratio"],
    reasoning: ["SeatingArrangement", "NumberSeries","Syllogism"],
    programming: ["OOPJava", "Algorithm","DataStructure"]
  },
  assessment3: {
    aptitude: ["SimpleInterest", "Permutation","TimeSpeedDistance"],
    reasoning: ["LogicalSequence", "OddOneOut","Puzzle"],
    programming: ["AdvanceJava", "PythonAdvanced","DBMS"]
  }

};

if (data[assessment] && data[assessment][category]) {
  data[assessment][category].forEach(topic => {
    let div = document.createElement("div");
    div.className = "category-card";
    div.innerHTML = `<h3>${topic}</h3>`;
    div.onclick = () => {
      localStorage.setItem("topic", topic);
      localStorage.setItem("assessment", assessment);
      localStorage.setItem("category", category);
      window.location.href = "instructions.html";
    };
    topicsGrid.appendChild(div);
  });
} else {
  topicsGrid.innerHTML = "<p>No topics found</p>";
}