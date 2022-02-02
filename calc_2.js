function calculate() {
   let n1 = document.getElementById("number1").value;
   let n2 = document.getElementById("number2").value;
   let operat = document.querySelector('select').value;
   
   let stRing = `${n1} ${operat} ${n2}`;
   
   let z = eval(stRing);
   document.getElementById("result").value = z;

   if (z == undefined || 
       z == false || 
       z == null || 
       z == 0 || 
       z == NaN || 
       z == ("")) {
      alert('Ошибка синтаксиса. Проверьте введенные данные.')   
   }
    
   window.onerror = function () {
       08.
       alert("Ошибка синтаксиса. Проверьте введенные данные.");
       09.
   }
   console.log(z); 
}




