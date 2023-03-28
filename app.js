var firstName=prompt("enter first name")
var lastName=prompt("enter last name")
document.write( "welcome"+firstName+lastName +"<br>")


var mobile=prompt("your favroite mobile model")
var lengthOfString=mobile.length
var answer=mobile.length
document.write(`my favourite phone is ${mobile} <br>  and length of string is ${answer} <br>`)

var nationality="pakistani"
var indexx=nationality.indexOf('n')
document.write(`index of n: ${indexx} <br>`)

var hello="Hello World"
document.write(` last index of l: ${hello.lastIndexOf('l')} <br>`)
document.write(` string:pakistani <br> character i is at index${nationality.indexOf("i")} <br>`)
var indexOfi=nationality.indexOf("i")
document.write("string:Pakistani <br>  character i is at index ".concat(indexOfi) )


var city="hyderabad"
var cities=city.replace("hyder","islam")
document.write(` <br> city:hyderabad <br> after replacement:${cities} <br>`)
var message="ali and sam are best friends .they play cricket and football together "
var neww=message.replaceAll("and","&")
document.write(`${neww} <br>`)
var valuee=472
var conversion=valuee.toString()
document.write(`value: ${valuee} <br> type: ${typeof(valuee) }  <br>value:472 <br> type: ${typeof(conversion)} <br>`)
 var convert=city.toUpperCase()
 var firstLetter=city.charAt(0).toUpperCase()
 var nyw=(firstLetter)+(city.slice(1,))
 document.write(` city:${city} <br> uppercase:${convert} <br>  ${nyw} <br>`)
 var numm=4.11
 var nummm=numm.toString().replace(".","")
 document.write(`${nummm} <br>`)
  var userInput="pakistan"
 // var lastcharacter=userInput.slice(length-1)
  var lastcharacter=userInput.charAt(userInput.length-1)
 document.write(`${lastcharacter} <br>`)
 var para="the quick brown fox jumps over the lazy dog"
 //var arr=["a"]
 //for(var i=0;i < para.length;i++){if(para.charAt(i)==="the"){
//console.log("found");
//break;
    //arr.push(i)
//}}
   // document.write(`${arr}`)
 var para2=  para.indexOf("the")
 console.log(para2)

  
 



