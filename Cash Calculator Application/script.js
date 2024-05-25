document.addEventListener("DOMContentLoaded",()=>{
    const et200 = document.getElementById('et200');
    const et100 = document.getElementById('et100');
    const et50 = document.getElementById('et50');
    const et10 = document.getElementById('et10');
    const et5 = document.getElementById('et5');
    const et1 = document.getElementById('et1');

    const txt200 = document.getElementById('txt200');
    const txt100 = document.getElementById('txt100');
    const txt50 = document.getElementById('txt50');
    const txt10 = document.getElementById('txt10');
    const txt5 = document.getElementById('txt5');
    const txt1 = document.getElementById('txt1');

    const txtFinalCash = document.getElementById('txtFinalCash');
    const txtFinalCashInWords = document.getElementById('txtFinalCashInWords');
    const btnReset = document.getElementById('btnReset');

    const cashInputs = [et200,et100,et50,et10,et5,et1];
    const cashTexts = [txt200,txt100,txt50,txt10,txt5,txt1];

    cashInputs.forEach((input,index)=>{
        input.addEventListener('input',()=>{
            cashCalculate(index);
        });
    });

    function cashCalculate(index){
        const denominations = [200,100,50,10,5,1];
        const rowValue = cashInputs[index].value * denominations[index];
        cashTexts[index].textContent = rowValue.toFixed(0);

        totalCash();
    }

    function totalCash(){

        let totalCashValue = 0;
        cashTexts.forEach((text)=>{
            totalCashValue += parseInt(text.textContent);
        });
        txtFinalCash.textContent = "Total Cash: " + totalCashValue.toFixed(0);
        txtFinalCashInWords.textContent = `Total Cash In Words: ${convertToWords(totalCashValue)}`;
    }

    btnReset.addEventListener("click",clearData);
    function clearData(){
        cashInputs.forEach((input)=>{
            input.value = "";
        });

        cashTexts.forEach((text)=>{
            text.textContent = "0";
        });

        totalCash();
    }

    cashInputs.forEach(input=>{
        input.addEventListener('input',()=>{
            const value = parseInt(input.value,10);
            if(isNaN(value) || value < 0){
                input.value = "";
            }
        });
    });

    function convertToWords(number){
        const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
      const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

      if(number === 0){
        return 'Zero';
      }

      let words = '';

      if(Math.floor(number / 1000)> 0){
        words += convertToWords(Math.floor(number / 1000)) + ' Thousand ';
        number %= 1000;
      }


      if(Math.floor(number / 100)> 0){
        words += convertToWords(Math.floor(number / 100)) + ' Hundred ';
        number %= 100;
      }

      if(number > 0){

        if(number < 10){
            words += units[number]; // units[5]
        }
        else if(number < 20){
            words += teens[number - 10];
        }
        else{
            words += tens[Math.floor(number / 10)]; // 15 - 10 => 5 ---> teens[5]
            if(number % 10 > 0){
                words += ' ' + units[number % 10]; // unit[5]
            }
        }
      }

      return words.trim();

    }
});