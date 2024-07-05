function Digital()
{
    let dateObj = new Date()
    let selectedElem = document.getElementsByTagName('span')

    //display hours
    let curHrs = dateObj.getHours()
    selectedElem[0].innerText = curHrs

    //display minutes
    let curMin = dateObj.getMinutes()
    selectedElem[1].innerText = curMin

    //display seconds
    let curSec = dateObj.getSeconds()
    selectedElem[2].innerText = curSec

    //display date
    let curDate = dateObj.getDate()
    selectedElem[3].innerText = curDate


    //display Months
    let curMnt = dateObj.getMonth()+1
    switch(curMnt)
    {
        case 1 : curMnt = "January"
        break;
        case 2 : curMnt = "February"
        break;
        case 3 : curMnt = "March"
        break;
        case 4 : curMnt = "April"
        break;
        case 5 : curMnt = "May"
        break;
        case 6 : curMnt = "June"
        break;
        case 7 : curMnt = "July"
        break;
        case 8 : curMnt = "August"
        break;
        case 9 : curMnt = "September"
        break;
        case 10 : curMnt = "October"
        break;
        case 11 : curMnt = "November"
        break;
        case 12 : curMnt = "December"
        break;
    }
    selectedElem[4].innerText = curMnt

    //display year
    let curYr = dateObj.getFullYear()
    selectedElem[5].innerText = curYr


    //display default day
    let curDay = dateObj.getDay()
    switch(curDay)
    {
        case 1 : curDay = "Monday"
        break;
        case 2 : curDay = "Tuesday"
        break;
        case 3 : curDay = "Wednesday"
        break;
        case 4 : curDay = "Thrusday"
        break;
        case 5 : curDay = "Friday"
        break;
        case 6 : curDay = "Saturday"
        break;
        case 7 : curDay = "Sunday"
        break;
    }
    selectedElem[6].innerText = curDay
}