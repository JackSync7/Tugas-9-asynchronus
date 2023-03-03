let kondisi = false;
let janji = new Promise((resolve, reject) => {
  if (kondisi) {
    resolve("janji ditepati");
  } else {
    reject("dasar buaya!!");
  }
});
// janji
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

async function asyncFUnction() {
  try {
    const response = await janji;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
asyncFUnction();
