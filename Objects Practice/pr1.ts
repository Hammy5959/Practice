type info = {
  manufacture: string;
  carname: string;
  sale: boolean;
};

function carinfo(manufacture: string, carname: string, sale: boolean): info {
  let info :info= {
    manufacture: manufacture,
    carname: carname,
    sale: sale,
};
console.log(`Car Name: ${info.manufacture}\nManufacture: ${info.carname}\nIs Sale? ${info.sale}`)

return info;
}
carinfo("Honda","Civic",true)

interface Person {
  name: string;
  age: number;
}

function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const personName = { name: "Hamid", age: 22 };
printPerson(personName);
