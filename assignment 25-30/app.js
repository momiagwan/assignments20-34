var num=+prompt("enter a number")
var numRound=Math.round(num)
var numceil=Math.ceil(num)
var numfloor=Math.floor(num)
document.write(` num:${num}  <br>roundof: ${numRound} <br> numberfloor:${numfloor} <br> number ceil:${numceil} <br>`)

var neg=(prompt("enter a number"))
var negstr=neg.toString().includes(".")
console.log(negstr)
if(Math.sign(neg)!==-1 || negstr!==true ){
  var num= prompt("enter a negative and floating number")
  document.write(` num:${num}  <br>roundof: ${Math.round(num)} <br> numberfloor:${Math.floor(num)} <br> number ceil:${Math.ceil(num)} <br>`)
 }
 else{ document.write(` num:${neg}  <br>roundof: ${Math.round(neg)} <br> numberfloor:${Math.floor(neg)} <br> number ceil:${Math.ceil(neg)} <br>`)
}
 var absolute=+prompt("enter a number")
 if (Math.sign(absolute)!==-1){ document.write(`number:${absolute}  `)}
else{ var neww=absolute.toString().replace("-","")
document.write(`absolute:${neww} <br>`)}

var randomm= Math.floor(Math.random()*100+1)
document.write(`number:${randomm} <br>`)
//function randomIntFromInterval(min, max) {  code of generating random num from user beginning
   // return Math.floor(Math.random() * (max - min + 1) + min)
  //}
  
 // const rndInt = randomIntFromInterval(3, 6)
 //document.write(rndInt)
  
 var toss=Math.floor(Math.random()*2)
  if(toss==0){Document.write`toss:Head`}
  else(
   document.write`toss:Tail`
   )

  var weight=parseFloat(prompt("enter your weight"))
  document.write(`your weight is ${weight} kilograms`)
  
