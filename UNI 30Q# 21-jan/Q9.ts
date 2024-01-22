//Q9
interface personType {
    name: string;
    age: number;
    address: string;
  }
  var personInfo: personType = {
    name: "Hamid Maqsood",
    age: 22,
    address: "Awan Town",
  };
  console.log(
    `Person Name:${personInfo.name}\nPerson Age:${personInfo.age}\nPerson Address:${personInfo.address}`
  );