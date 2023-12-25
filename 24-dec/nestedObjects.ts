type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  author: Author;
  name: string;
};

const myBook: Book = {
  author: {
    firstName: "Hamid",
    lastName: "Maqsood",
  },
  name: "My Best Book",
};
console.log(
  `My First Name is ${myBook.author.firstName} my Last Name is ${myBook.author.lastName} and this book is ${myBook.name}`
);
