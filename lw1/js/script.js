var N = 10; 
var array = [];
var isFound = false; 

var a = prompt("Число для поиска: "); 

for (i = 1; i <= N; i++) { 
  array[i] = Math.floor(Math.random() * (16 - 1)) + 1;  
  alert("Число " + i + ": " + array[i]);
    if (array[i] == a) {
      isFound = true;
	}
}

if (isFound == true) {
  alert("Число: " + a + " найдено");
} else {
  alert("Число: " + a + " не найдено");
}
