`What are union types in TypeScript?`
type union=string|number|boolean
function validationCode(code:number):union{
    if(code === 200){
        return "Success "
    }else if(code === 400){
        return "Error"
    }else{
        return "Pending"
    }
    
}
let status:union=validationCode(200)
console.log(status)
