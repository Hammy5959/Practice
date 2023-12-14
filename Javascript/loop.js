//Loops
/*for(j = 0; j < 4; j++){
    console.log(j)
}

for(h = 2; h <= 10 ;h++){
    console.log(h)
}*/

/*var table = 4
for(var i=1; i <= 10; i++){
console.log(table +" "+ "x" +" "+ i+ " "+"=" +" "+ (table*i))
}*/

/*var table = 6
for(var h = 1; h <= 10 ; h++){
    console.log(table +" "+ "x "+h+ "= "+(table*h))
}*/

/*var input = parseInt(prompt("Enter Your Table Number"))
for(var z = 1 ; z <= 10; z++){
    console.log(input + " x " +z+" = "+(input*z))
}*/

/*var input = parseInt(prompt("Enter Your Number"))
for(a = 10; a >= 1; a--){
    console.log(input+" x "+a+" = "+(input*a))
}*/

//Break Loop
/*for(s = 0; s < 14; s++){
    if(s == 12){
        break;
    }
    console.log("S = "+s)
}*/

//Conitinue Loop

/*for(d = 14 ; d > 1 ; d--){
    if(d == 5){
        continue
    }
    console.log("D = "+d)
}*/

var table = parseInt(prompt("Enter your Number"))
for(r = 1 ; r <= 10; r++){
    if(r == 9){
        continue
    }
    console.log(table + " x "+r+ " = "+(table*r))
}
