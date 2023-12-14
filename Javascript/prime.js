//prime Numbers

var num = parseInt(prompt("Enter Number"))
for(a = 2; a < num; a++){
    var result= num%a
    if(result == 0){
        console.log("Not A prime Number "+num+" a "+a)
     break   
    }else{
        console.log("prime Number" +num)
    }break
}

var num = parseInt(prompt("Enter Your Number"))
var isPrime = true;
for(s = 2; s < num; s++){
    var result = num%s
    if(result == 0){
        console.log("not a prime Number "+num +" S :"+s)
        isPrime=false
        break
    }
}
if(isPrime){
    console.log("Prime Number "+num)
}