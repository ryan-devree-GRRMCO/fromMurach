let futureValue;

    let investment = prompt("Enter investment amount as xxxxx.xx", 10000);
        investment = parseFloat(investment);

    let rate = prompt("Enter interest rate as xx.x", 7.5);
        rate = parseFloat(rate);

    let years = prompt("Enter number of years", 10);
        years = parseInt(years);

    futureValue = investment;
    for (let i = 1; i <= years; i++) {
        futureValue = futureValue + (futureValue * rate / 100);
    }
    futureValue = parseInt(futureValue);

    document.write("Investment amount = " + investment + ", Interest rate = " + rate + ", Years = " + years + 
        ", Future Value = " + futureValue + "<br><br>");
