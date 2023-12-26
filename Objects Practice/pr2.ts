type dataType = string | number | boolean;

var studentAdmission: dataType[] = ["Hamid Maqsood", 22, true];
for (let i = 0; i < studentAdmission.length; i++) {
  if (studentAdmission[i] === "Hamid Maqsood") {
    console.log(`Student Name: ${studentAdmission[i]}`);
  } else if (studentAdmission[i] === 22) {
    console.log(`Student Age: ${studentAdmission[i]}`);
  } else if (studentAdmission[i] === true) {
    console.log(`Student Admission: ${studentAdmission[i]}`)
  }
}
