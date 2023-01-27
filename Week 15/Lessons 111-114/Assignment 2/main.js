let inputs = document.querySelectorAll("input");

let personName = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let ageSelectbox = document.querySelector("#age");

personName.addEventListener("blur", () => {
  window.sessionStorage.setItem("Name", personName.value);
});
email.addEventListener("blur", () => {
  window.sessionStorage.setItem("Email", email.value);
});
phone.addEventListener("blur", () => {
  window.sessionStorage.setItem("Phone", phone.value);
});
ageSelectbox.addEventListener("change", () => {
  window.sessionStorage.setItem("Age", ageSelectbox.value);
});

if (
  window.sessionStorage.getItem("Name") ||
  window.sessionStorage.getItem("Email") ||
  window.sessionStorage.getItem("Phone") ||
  window.sessionStorage.getItem("Age")
) {
  personName.value = window.sessionStorage.getItem("Name");
  email.value = window.sessionStorage.getItem("Email");
  phone.value = window.sessionStorage.getItem("Phone");
  ageSelectbox.value = window.sessionStorage.getItem("Age");
}
