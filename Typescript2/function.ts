function greet(name:string=""){
    console.log("SHEIKH--"+ name.toUpperCase ()+ "||")
}
greet("Hamid")

function greet2(name:string="hamid"){
    console.log("Hammy - " +name.toUpperCase ()+ ".")

}
greet2("MAQSOOD")

let Myname= "hamid "
let nickname= "sheikh"
console.log(Myname  + nickname)


//Arrow functions

let sum1=(x: number, y: number): number =>{
return x-y;
}
 sum1(10,20);
 console.log(sum1(10,20))

 let sum2 = (x: number , y:number): number => {
return x-y;
 }

 sum2 (3 ,4);
 console.log(sum2 (3,4))

 function greet3(name:string="yasir" ){
    console.log("Hamid" +name.toUpperCase() +"!!")
 }
 greet3()

 let sum3 =(x: number , y: number): number =>{
    return x/y
 } 
 sum3(60,5)
 console.log(sum3(60,5))

 function greet4(name:string=""){
    console.log("Hamid ," +name.toUpperCase() + "##")
 }
 greet4("Maqsood")



 function greet5 (name : string ="56"){
    let greeting="Hamid"
return greeting.toUpperCase() +" " +  name.toUpperCase()  
 }
 greet5("maqsood")
 let a = greet5("maqsood")
 
 console.log(a)


function greet9(name : string =""){
   let greeting = "Hamid"
   return greeting.toLowerCase() + " " + name.toUpperCase()
}
let b = greet9("hammy")
console.log(b)


function greet59(name : string = "59"){
   let greeting ="sheikh"
   return greeting.toUpperCase() + " " + name.toLowerCase() + " ty "
}
let h = greet59("sheikh")
console.log(h)







function greet01(name : number = 6){
   let greeting = 9
   return greeting * name
}
let U = greet01(5)

function greet0 (name: number = 5){
   let greeting = 8
   return greeting * name
} 

let Q = greet0(8)
console.log(Q * U)


let sum29= (c : number , v : number) :number =>{
 return c*v  
}

sum29 (5 , 7)
console.log(sum29(5 , 7))



let sum5 =(x:number =7 , y:number= 7): number =>{
   return x * y
}
sum5()
console.log(sum5(7 , 7))



function greet000(name : number = 4 , name2 : number = 4){
let number = 5
 console.log(number * name * name2)
}
greet000()

let sum8=(name4 : number, name5: number):number=> {
return name4 * name5
}
sum8(50 , 25)
console.log(sum8(25,50))



function greet98(name: number){
   let number=6
   return number * name
}
 let w=greet98(25)
 console.log(w)




 let sum35=(L:number,  kk:number )=> L/kk
 sum35(45 , 3)
 console.log(sum35(45 ,3))


 function greet34(name:string="hamo"){
  let greetings="ba"
   let greeting="hammy"
   let greetingo="00"
return greeting.toUpperCase() + " " +name.toUpperCase() + " " +greetings.toUpperCase()+ " " + greetingo 
 }

 let H=greet34("hamo")
 console.log(H)
 
 let my= ("Hamid ")
 let my1 =("Maqsood")
let my3 = (my + my1)
console.log(my3)