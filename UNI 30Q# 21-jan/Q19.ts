//Q19
function delayMeassage(message: () => void): void {
    setTimeout(message, 2000);
  }
  delayMeassage(() => {
    console.log("Hello Iam From Panaverse");
  });
  