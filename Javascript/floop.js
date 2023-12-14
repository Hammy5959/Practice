var find =[12 , 45 , 59 , 66 , 92]
var input=parseInt(prompt("Enter Number To find"))
console.log("Input =",input)
var found = false;
for(i = 0;i < find.length;i++){
    //console.log(find[i])
    if(find[i] === input){
        console.log("Found "+input+" on index ="+i)
        found= true;
        break;
    }
}
if(!found){
    console.log("Not Found")
}