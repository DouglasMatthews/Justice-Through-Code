let counter = document.getElementById("counter")
       let plusBtn = document.getElementById("plusBtn");
       let minusBtn = document.getElementById("minusBtn");

       function addNumber() {
        counter.value = Number(counter.value) + 1;
       };

       function subtractNumber() {
        counter.value = Number(counter.value) - 1;
       }

        console.log(plusBtn);
        console.log(minusBtn);