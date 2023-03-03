// console.log("halloworld");
// console.log("jeri");
// setTimeout(() => {
//   console.log("okey");
// }, 5000);
// console.log("utama");
let kondisi = false;
let janji = new Promise((resolve, reject) => {
  if (kondisi) {
    resolve("janji ditepati");
  } else {
    reject("dasar buaya!!");
  }
});
janji
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
