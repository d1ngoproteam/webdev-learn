var searchNumber;
var N = 10; 
var array = [];
var isFound = false; 

var searchNumbers = prompt("Число для поиска: "); 
if ((searchNumber == "") || (isNaN(searchNumber))) {
  alert("Ошибка ввода");
  windows.stop;
}  
for (i = 1; i <= N; i++) { 
  array[i] = Math.floor(Math.random() * (16 - 1)) + 1;  
  alert("Число " + i + ": " + array[i]);
    if (array[i] == searchNumbers) {
      isFound = true;
    }
}

if (!isFound) {
  alert("Число: " + searchNumbers + " не найдено");
} else {
  alert("Число: " + searchNumbers + " найдено");
}
