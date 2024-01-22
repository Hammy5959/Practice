function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            const data=`project from callack`
            resolve(data)
            reject(data)
        },5000)
    })
}
fetchData()
.then((value)=>{
    console.log(`This is then ${value}`)
}).catch((error)=>{
    console.log(`this is catch ${error}`)
}).finally(()=>{
    console.log(`Finally`)
})