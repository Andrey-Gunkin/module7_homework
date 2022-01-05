let obj = {
  name: "Andrei",
  lastname: "Gunkin",
  age: 26
}

let student = Object.create(obj);
student.university = "skillfactory";
student.job = "engineer";

function getOwnInf(arg) {
  for (let key in arg) {
    if (arg.hasOwnProperty(key)) {
      console.log(`${key}: ${arg[key]}`)
    }
  }
}

getOwnInf(student);