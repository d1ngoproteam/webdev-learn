var N = 10; 
var array = [];
var isFound = false; 

var a = prompt("����� ��� ������: "); 

for (i = 1; i <= N; i++) { 
  array[i] = Math.floor(Math.random() * (16 - 1)) + 1;  
  alert("����� " + i + ": " + array[i]);
    if (array[i] == a) {
      isFound = true;
	}
}

if (isFound == true) {
  alert("�����: " + a + " �������");
} else {
  alert("�����: " + a + " �� �������");
}
