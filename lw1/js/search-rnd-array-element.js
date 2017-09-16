var counter = 1;
var searchNumber;
var N = 9; 
var array = [];
var isFound = false;
var out; 

for (i = 0; i <= N; i++) { 
  array[i] = Math.floor(Math.random() * (16 - 1)) + 1;  
  alert("Число " + counter++ + ": " + array[i]);
}

var searchNumber = prompt("Число для поиска: "); 
if ((searchNumber == "") || (isNaN(searchNumber)) || (searchNumber == null)) {
  alert("Ошибка ввода");
  windows.stop;
}

for (i = 0; i <= N; i++) {
  if (array[i] == searchNumber) {
    isFound = true;
  }
}  	

if (!isFound) { 
  out = "Число: " + searchNumber + " не найдено";
} else {
  out = "Число: " + searchNumber + " найдено";
}
alert(out);

