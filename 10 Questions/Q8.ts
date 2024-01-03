`Create an object with properties name, age, and gender. Print the object to the console.`

interface type{
    name:string,
    age:number,
    gender:string
}
var infoObject:type={
    name:"Hamid Maqsood",
    age:22,
    gender:"Male"
}
console.log(`Name: ${infoObject.name}\nAge: ${infoObject.age}\nGender: ${infoObject['gender']} `)