//Q8
interface bookDetailsType {
    name: string;
    author: string;
    topic: string;
  }
  var bookDetails: bookDetailsType = {
    name: "Typescript",
    author: "Goldgerg",
    topic: "Programming",
  };
  console.log(
    `Book Name:${bookDetails.name}\nBook Author:${bookDetails.author}\nBook Topic:${bookDetails.topic}`
  );