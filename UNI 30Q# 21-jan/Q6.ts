// Q6
function stringPalindromeCheck(str: string): boolean {
    let checkString: string = str.split("").reverse().join(" ");
    return str === checkString;
  }
  console.log(stringPalindromeCheck("Hamid"));