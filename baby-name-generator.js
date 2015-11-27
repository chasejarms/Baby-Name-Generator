var boyNames = [
  "Liam",
  "Noah",
  "Mason",
  "Ethan",
  "Logan",
  "Lucas",
  "Jackson",
  "Oliver",
  "Aiden",
  "Jacob",
  "Elijah",
  "James",
  "Alexander",
  "Benjamin",
  "Jack",
  "Luke",
  "William",
  "Michael",
  "Owen",
  "Carter"
];
var girlNames = [
  "Emma",
  "Olivia",
  "Sophia",
  "Ava",
  "Isabella",
  "Mia",
  "Charlotte",
  "Amelia",
  "Madison",
  "Emily",
  "Harper",
  "Abigail",
  "Avery",
  "Lily",
  "Ella",
  "Chloe",
  "Sofia",
  "Evelyn",
  "Aria",
  "Aubrey"

];

var createdName = function(boyArray, girlArray) {
  if (document.getElementById('boy').checked) {
    var newName = boyArray[Math.floor(Math.random() * boyArray.length)];
    return newName;
  }
  else if (document.getElementById('girl').checked) {
    var newName = girlArray[Math.floor(Math.random() * girlArray.length)];
    return newName;
  }
};

var printNameToDOM = function(firstName, middleName) {
  var lastName = document.getElementById('last-name').value;
  document.getElementById('baby-name').innerText = firstName + " " + middleName + " " + lastName;
};

var nameGenerator = function () {
  printNameToDOM(createdName(boyNames, girlNames), createdName(boyNames, girlNames));
  changePageStyle();
};

var validate = function(anotherFunction) {
  if(!document.getElementById('last-name').value) {
    alert("Oops, look like you forgot to put a last name.");
  }
  else if (!document.getElementById('boy').checked && !document.getElementById('girl').checked) {
    alert("Make sure to check a gender box.");
  }
  else {
    anotherFunction();
  }
}

var changePageStyle = function() {
  if(document.getElementById('boy').checked) {
    document.body.style.backgroundColor = "#9999ff"; //a light blue color, 80%
    document.getElementById('generate-name').style.backgroundColor = "#9999ff";
    document.getElementById('generate-name').style.color = "White";
    document.getElementById('generate-name').style.borderColor = "White";
    document.body.style.color = "White";
  }
  else if(document.getElementById('girl').checked) {
    document.body.style.backgroundColor = "#ff99c1"; //a light pink color, 80%
    document.getElementById('generate-name').style.backgroundColor = "#ff99c1";
    document.getElementById('generate-name').style.color = "White";
    document.getElementById('generate-name').style.borderColor = "White";
    document.body.style.color = "White";
  }
}
