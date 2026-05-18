//What the HTML looks like:
//<h1>Grades of the Class</h1>
//<h2>Failing Grades</h2>
//<ul></ul>

const days = 6;
const limit = 30;
let StudentReport = [11, 42, 33, 64, 29, 37, 44];

// FOR method
for (let i = 0; i < 6; i++) {
  if (StudentReport[i] < 30){
    const item = document.createElement("li");
    item.textContent = StudentReport[i];
    document.querySelector("ul").appendChild(item);
  }
}

// WHILE method
let count = 0
while (count < 7) {
  if (StudentReport[count] < 30) {
    const item = document.createElement("li");
    item.textContent = StudentReport[count];
    document.querySelector("ul").appendChild(item);
  }
  count++;
}

// FOREACH method
StudentReport.forEach(function(grade) {
  if (grade < 30) {
    const item = document.createElement("li");
    item.textContent = grade;
    document.querySelector("ul").appendChild(item);
  }
})

// FOR...IN method
for (let x in StudentReport) {
  if (StudentReport[x] < 30) {
    const item = document.createElement("li");
    item.textContent = StudentReport[x];
    document.querySelector("ul").appendChild(item);
  }
}