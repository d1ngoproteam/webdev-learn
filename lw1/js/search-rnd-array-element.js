var schet = 1;
var searchNumber;
var N = 9; 
var array = [];
var isFound = false; 

for (i = 0; i <= N; i++) { 
  array[i] = Math.floor(Math.random() * (16 - 1)) + 1;  
  alert("Число " + schet++ + ": " + array[i]);
    if (array[i] == searchNumbers) {
      isFound = true;
	}
}

var searchNumbers = prompt("Число для поиска: "); 
if ((searchNumbers == "") || (isNaN(searchNumbers))) {
  alert("Ошибка ввода");
  windows.stop;
}  

if (!isFound) {
  alert("Число: " + searchNumbers + " не найдено");
} else {
  alert("Число: " + searchNumbers + " найдено");
}
