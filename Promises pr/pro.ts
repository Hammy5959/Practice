function fetchData3(url: string) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        const data = `Hello iam data from callback`;
        resolve(data);
      },5000);
    });
  }
  fetchData3("Hamid")
  .then((value)=>{
    console.log(`${value}`)
  })

function fetchdata(url: string) {
  return new Promise((resolve, reject) => {
    if(Math.random()> 0.5){
        resolve(`data from ${url}`)
    }else{
        reject("error")
    }
    
  });
}
fetchdata("url")
  .then((value) => {
    console.log(`this is then ${value}`);
  })
  .catch((error) => {
    console.log(`this is cath ${error}`);
  })
  .finally(() => {
    console.log("Finally");
  });
