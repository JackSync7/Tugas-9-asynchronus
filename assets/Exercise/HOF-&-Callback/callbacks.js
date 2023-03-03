function hello() {
  console.log("hello world");
}

const goodbye = () => {
  console.log("goodbye");
};

function print(a, b) {
  a();
  b();
}

print(hello, goodbye);
