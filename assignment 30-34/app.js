var current= new Date()
document.write(` Date is ${current} <br>`)
var month=current.getMonth()
var months=["january","february","march","april","may","june","july","august","september","october","november","december"]
var indexx=months[month]
document.write (`month is ${indexx} <br>`)
var days=["sun","mon","tue","wed","thu","fri","sat"]
 var cday=current.getDay()
 var dindexx=days[cday]
 document.write(`day is ${dindexx} <br>`)
 day1=prompt("enter day")
 if (day1==="sunday" || day1==="saturday"){alert("fun day")}

var cdate=current.getDate()
if (cdate<=15){alert("fist fifteen days of the month <br>")}
else if(cdate>31){alert("wrong input")}
else (alert("last fifteen days of the month "))
 var pmm=current.getHours()
 if (pmm<=12){document.write("its pm")}
 else{document.write("its am")}


