document.getElementById('calculateBtn').addEventListener('click',calculateLoan);

function calculateLoan(){
    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate = parseFloat(document.getElementById("interestRateInput").value);
    const loanTerm = parseFloat(document.getElementById("loanTermInput").value);


    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        alert("Please Enter valid Number for all the Fields");
    }

    const monthlyInterst = interestRate /100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterst)/(1-Math.pow(1 + monthlyInterst, -totalPayments));
    const totalInterst = (monthlyPayment * totalPayments) - loanAmount;

    displayResult(monthlyPayment,totalInterst);

}

function displayResult(monthlyPayment, totalInterst){
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <p><strong>Mounthly Payment: ${monthlyPayment.toFixed(2)}</p></strong>
        <p><strong>Total Interest: ${totalInterst.toFixed(2)}</p></strong>
    `;
}