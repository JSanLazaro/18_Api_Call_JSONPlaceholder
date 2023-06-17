import { Api } from "./api.js";
let api = new Api("https://jsonplaceholder.typicode.com");
let users = await api.getData("users");
console.log(users);
let tableBody = document.getElementsByTagName("tbody");
users.forEach((element) => {
  const row = document.createElement("tr");

  const id = document.createElement("td");
  id.innerText = element.id;
  const name = document.createElement("td");
  name.innerText = element.name;
  const username = document.createElement("td");
  username.innerText = element.username;
  const email = document.createElement("td");
  email.innerText = element.email;
  const phone = document.createElement("td");
  phone.innerText = element.phone;

  row.appendChild(id);
  row.appendChild(name);
  row.appendChild(username);
  row.appendChild(email);
  row.appendChild(phone);

  tableBody[0].appendChild(row);
});
const userForm = document.userForm;
userForm.userId.addEventListener("change", (ev) => {
  let userId = userForm.userId.valueAsNumber;
  
  const divElement = document.getElementById("user_data");
  getUser(userId).then((response) => {
    
    divElement.innerHTML = `<h1>${response.name} </h1> <h2> ${response.phone} </h2>`;

  });
});
async function getUser(id) {
  let user = await api.getUserById(id);
  return user;
}
