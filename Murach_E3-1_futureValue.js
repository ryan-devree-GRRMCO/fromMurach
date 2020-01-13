let futureValue;
let again;
let investment;
let rate;

do {
    do {
        investment = prompt("Enter investment amount as xxxxx.xx", 10000);
            investment = parseFloat(investment);
        if(isNaN(investment)) {
            alert("Investment must be a number");
        }
    }
    while (isNaN(investment));

    do {
        rate = prompt("Enter interest rate as xx.x", 7.5);
            rate = parseFloat(rate);
        if(isNaN(rate) || rate <= 0 || rate >= 15) {
            alert("Interest rate must be greater than 0% and less than 15%");
        }
    }
    while (isNaN(rate) || rate <= 0 || rate >= 15);


        let years = prompt("Enter number of years", 10);
            years = parseInt(years);

        document.write("Investment amount = " + investment + ", Interest rate = " + rate + ", Years = " + years + "<br>");

        futureValue = investment;
        let year;
        let interest;
        let value;
        for (let i = 1; i <= years; i++) {
            year = i;
            interest = (futureValue * rate / 100);
            value = parseInt(futureValue += futureValue * rate / 100);
            document.write("Year = " + year + ", Interest = " + interest + ", Value = " + value + "<br>");
        }

        document.write("<br>");
        again = prompt("Repeat entries?", "y");
}
while (again == "y");