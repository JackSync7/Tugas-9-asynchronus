function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let address = document.getElementById("address").value;

  if (name == "") {
    return alert("nama harus di isi");
  } else if (email == "") {
    return alert("email harus di isi");
  } else if (phone == "") {
    return alert("telpon harus di isi");
  } else if (subject == "") {
    return alert("pesan harus di isi");
  } else if (address == "") {
    return alert("alamat harus di isi");
  }

  const emailReceiver = "rhomairama.dev@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, alamat saya ${address}, bisakah anda menghubungi saya di ${phone}`;
  a.click();
}
