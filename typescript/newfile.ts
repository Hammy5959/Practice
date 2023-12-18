//Example1
var cleanestCities= ["Karachi", "Lahore", 'Islamabad',"Peshawar"];

for (var i = 0; i <=4; i++){
    if ("Islamabad" === cleanestCities[i]){
        console.log("It's one of the cleanest citties");
        break;
    }
}

//Eample2
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
var matchFound ="no";
for(var i = 0; i <= 4; i++){
    if ("quetta" === cleanestCities[i]){
        matchFound = "yes";
        console.log("It's one of the cleasnest cities");
    }
}
if (matchFound === "no"){
    console.log("It's not on the list");
}
//Example3
var cleanestCities =["Karachi", "Lahore", "Islamabad", "Peshawar"];
var matcheFound = false;
for(var i = 0; i < cleanestCities.length; i++){
    if("Islamabad" === cleanestCities[i]){
    matcheFound = true;
    console.log("It's one of the cleanset cities");
    break
    }
}
if (matcheFound === false){
    console.log("It's not on the files");
}