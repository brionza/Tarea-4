getDate();

function getDate(){
    let currentDate = new Date();
    let startYear = new Date(currentDate.getFullYear(), 0, 1);
    let getMS = currentDate - startYear;
    let getDays = Math.floor(getMS / (1000 * 60 * 60 *24));
    
    document.write(getDays + '<br>');
    untilNY(getDays);
    WCWin(currentDate);        
}   

function untilNY(days){
    let NY = 365;
    let tillNY = NY - days;
    
    document.write(tillNY + ' days till New Year.');
}

function WCWin(days){
    let aYear = 2022;
    let aMonth = 12;

    var thisYear = days.getFullYear();
    var thisMonth = days.getMonth() + 1;

    var diffYears = thisYear - aYear;
    var diffMonths = (diffYears * 12) + thisMonth  - aMonth;

    document.write('<br>' + diffMonths + ' months being Argentina WC winner.');
    BDays(thisYear);
}

function BDays(years){
    let bornDate = 2005;
    let diffYears = years - bornDate;
    
    document.write('<br>' + diffYears + ' años desde mi nacimiento.');
}