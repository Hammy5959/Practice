//Q22

// function sequentialPromises(): Promise<string> {
//     return delayMeassagePromises()
//       .then((message1) => {
//         console.log(message1);
//         return delayMeassagePromises();
//       })
//       .then((message2) => {
//         console.log(message2);
//         return "All promises resolved";
//       });
//   }
  
//   // Example usage
//   sequentialPromises().then((finalMessage) => {
//     console.log(finalMessage);
//   });
  